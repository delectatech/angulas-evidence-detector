import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { TabViewModule } from 'primeng/tabview';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { GalleriaModule } from 'primeng/galleria';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelModule } from 'primeng/panel';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { MessagesModule } from 'primeng/messages';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { TrackingService } from '@app/core/services/tracking.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    TabViewModule,
    CardModule,
    ProgressBarModule,
    CommonModule,
    TagModule,
    RouterModule,
    GalleriaModule,
    InputSwitchModule,
    FormsModule,
    ScrollPanelModule,
    PanelModule,
    SkeletonModule,
    MessagesModule,
    ButtonModule,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  uid: string = '';
  establishmentData: any;
  filterTv: boolean = false;
  filterTvSoccer: boolean = false;
  filteredImages: any[] = [];
  menuLinks: any[] = [];
  allMenuItems: any[] = []; // Combined and sorted menu items (images + links)
  filteredComments: any[] = [];
  filterSoccerComment: boolean = false;
  filterSportsComment: boolean = false;
  galleryVisible: boolean = false;
  displayGallery: boolean = false;
  activeIndex: number = 0;
  allImagesLoaded: boolean = false;
  loadedImagesCount: number = 0;
  hasComments: boolean = false;
  hasMenus: boolean = false;
  visibleIndicators: number[] = []; // Array que almacenará los indicadores visibles
  maxIndicators: number = 5; // Número máximo de indicadores visibles a la vez
  warningMessages = [
    [
      {
        severity: 'warn',
        detail: 'No se han encontrado menús analizados de este establecimiento.',
      },
    ],
    [
      {
        severity: 'warn',
        detail: 'No se han encontrado evidencias en los comentarios analizados de este establecimiento.',
      },
    ],
    [{ severity: 'warn', detail: 'No se han encontrado evidencias en los menús analizados de este establecimiento.' }],
    [{ severity: 'warn', detail: 'No se han encontrado evidencias en los comentarios analizados de este establecimiento.' }],
  ];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private trackingService: TrackingService,
    protected router: Router
  ) {}

  ngOnInit() {
    registerLocaleData(localeEs);
    this.uid = this.route.snapshot.paramMap.get('uid')!;
    this.loadEstablishmentData();
  }

  openGallery(index: number): void {
    this.activeIndex = index;
    this.displayGallery = true;
    this.updateVisibleIndicators();
  }

  updateVisibleIndicators(): void {
    const start = Math.max(0, this.activeIndex - Math.floor(this.maxIndicators / 2));
    const end = Math.min(this.filteredImages.length, start + this.maxIndicators);

    this.visibleIndicators = Array.from({ length: end - start }, (_, i) => i + start);
  }

  onIndicatorClick(index: number): void {
    this.activeIndex = index;
    this.updateVisibleIndicators();
  }

  loadEstablishmentData() {
    this.apiService.loadEstablishmentData(this.uid).subscribe({
      next: (resp: any) => {
        this.establishmentData = resp;
        this.establishmentData.potential_ratio = parseFloat(this.establishmentData.potential_ratio).toFixed(0);
        
        // Handle menus instead of evidences.images
        if (this.establishmentData.menus && this.establishmentData.menus.details && this.establishmentData.menus.details.length > 0) {
          this.hasMenus = true;
          this.processMenuData(this.establishmentData.menus.details);
        } else {
          this.hasMenus = false;
          this.filteredImages = [];
          this.menuLinks = [];
          this.allMenuItems = [];
        }

        // Handle comments - now directly from comments instead of evidences.comments
        if (this.establishmentData.comments && this.establishmentData.comments.details && this.establishmentData.comments.details.length > 0) {
          this.hasComments = true;
          this.filteredComments = this.establishmentData.comments.details.map((comment: any) => ({
            ...comment,
            comment_text: comment.body // Map 'body' to 'comment_text' for compatibility
          }));
        } else {
          this.hasComments = false;
          this.filteredComments = [];
        }
      },
    });
  }

  processMenuData(menuDetails: any[]) {
    // Separate images from links based on type
    const imageTypes = ['GOOGLE', 'WEB_IMG'];
    const linkTypes = ['PDF', 'HTML'];

    this.filteredImages = menuDetails
      .filter(item => imageTypes.includes(item.type))
      .map(item => ({
        ...item,
        image_url: item.sourceLink,
        isLoaded: false
      }));

    this.menuLinks = menuDetails
      .filter(item => linkTypes.includes(item.type));

    // Combine and sort all menu items by date
    this.allMenuItems = [...this.filteredImages, ...this.menuLinks]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  handleTabChange(event: any) {
    const index = event.index;
    if (index === 0) {
      this.sendTracking('detail_tab_click', { parameters: { establishment_uid: this.uid, tab: 'basic_information' } });
    }
    if (index === 1) {
      this.sendTracking('detail_tab_click', { parameters: { establishment_uid: this.uid, tab: 'image_gallery' } });
    }
    if (index === 2) {
      this.sendTracking('detail_tab_click', { parameters: { establishment_uid: this.uid, tab: 'comments_list' } });
    }
  }

  sendTracking(name: string, parameters: Record<string, any>) {
    this.trackingService.trackAction(name, parameters).subscribe();
  }

  applyFilter() {
    this.sendTracking('menu_filter', { parameters: { establishment_uid: this.uid, filter_tv: this.filterTv, filter_tv_soccer: this.filterTvSoccer } });
    let allowedLabels: string[] = [];
    
    if (!this.filterTv && !this.filterTvSoccer) {
      // Show all menu items when no filter is applied
      if (this.establishmentData.menus && this.establishmentData.menus.details) {
        this.processMenuData(this.establishmentData.menus.details);
      }
    } else {
      if (this.filterTv) {
        allowedLabels.push('tv');
      }
      if (this.filterTvSoccer) {
        allowedLabels.push('tv with soccer');
      }

      // Filter all menu items
      const filteredMenuItems = this.establishmentData.menus.details.filter((item: any) => {
        return allowedLabels.some((label) => item.label === label);
      });

      this.processMenuData(filteredMenuItems);
      this.hasMenus = this.allMenuItems.length > 0;
    }
  }

  applyCommentFilter() {
    this.sendTracking('comments_list_filter', { parameters: { establishment_uid: this.uid, filter_soccer_comment: this.filterSoccerComment, filter_sports_comment: this.filterSportsComment } });
    let allowedLabels: string[] = [];

    if (!this.filterSoccerComment && !this.filterSportsComment) {
      this.filteredComments = this.establishmentData.comments.details.map((comment: any) => ({
        ...comment,
        comment_text: comment.body
      }));
    } else {
      if (this.filterSoccerComment) {
        allowedLabels.push('soccer_comment');
      }
      if (this.filterSportsComment) {
        allowedLabels.push('sports_comment');
      }

      this.filteredComments = this.establishmentData.comments.details
        .filter((comment: any) => {
          return allowedLabels.some((label) => comment.label === label);
        })
        .map((comment: any) => ({
          ...comment,
          comment_text: comment.body
        }));
    }
  }

  getSeverity(label: string) {
    switch (label.toLowerCase()) {
      case 'tv':
        return 'info';
      case 'soccer':
        return 'secondary';
      case 'tv with soccer':
        return 'success';
      case 'gulas':
        return 'warning';
      case 'soccer_comment':
        return 'success';
      case 'sports_comment':
        return 'info';
      default:
        return 'info';
    }
  }

  imageClick(menuItemIndex: number, image_url?: string) {
    // Find the actual index in filteredImages array
    const menuItem = this.allMenuItems[menuItemIndex];
    const imageIndex = this.filteredImages.findIndex(img => img.md5 === menuItem.md5);
    
    if (imageIndex >= 0) {
      this.activeIndex = imageIndex;
      this.displayGallery = true;
      this.sendTracking('image_gallery_click', { parameters: { establishment_uid: this.uid, image_url: image_url } });
    }
  }

  openMenuLink(link: any) {
    window.open(link.sourceLink, '_blank');
    this.sendTracking('menu_link_click', { 
      parameters: { 
        establishment_uid: this.uid, 
        link_type: link.type, 
        link_url: link.sourceLink 
      } 
    });
  }

  isImageType(type: string): boolean {
    return ['GOOGLE', 'WEB_IMG'].includes(type);
  }

  isLinkType(type: string): boolean {
    return ['PDF', 'HTML'].includes(type);
  }

  getMenuItemIcon(type: string): string {
    switch (type) {
      case 'PDF':
        return 'fa-file-pdf';
      case 'HTML':
        return 'fa-globe';
      default:
        return 'fa-external-link';
    }
  }

  getMenuItemLabel(type: string): string {
    switch (type) {
      case 'PDF':
        return 'Ver PDF';
      case 'HTML':
        return 'Ver Web';
      default:
        return 'Abrir enlace';
    }
  }

  onImageLoad() {
    this.loadedImagesCount++;

    if (this.loadedImagesCount === this.filteredImages.length) {
      this.allImagesLoaded = true;
    }
  }

  capitalizeDate(date: any): string {
    if (!date || isNaN(new Date(date).getTime())) {
      return 'Fecha no válida';
    }

    const formattedDate = new Intl.DateTimeFormat('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));

    return formattedDate.replace(/(^\w{1})|(\s\w{1})(?=\w{3,})/g, (match) => match.toUpperCase());
  }

  shortDate(date: any): string {
    if (!date || isNaN(new Date(date).getTime())) {
      return 'Fecha no válida';
    }

    const formattedDate = new Intl.DateTimeFormat('es-ES', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(new Date(date));

    return formattedDate.replace(/(^\w{1})|(\s\w{1})(?=\w{3,})/g, (match) => match.toUpperCase());
  }

  redirectDirection(directions: any) {
    let type = 'none';
    if (directions.googleUrl != null) {
      type = 'google_map';
      window.open(directions.googleUrl, '_blank');
    } else if (directions.tripAdvisorUrl != null) {
      type = 'tripadvisor';
      window.open(directions.tripAdvisorUrl, '_blank');
    }
    this.sendTracking('open_street_direction_from_detail', { parameters: { establishment_Uid: this.uid, redirect_website: type } });
  }

  // Method to highlight "gula" word in text
  highlightGula(text: string): string {
    if (!text) return text;
    return text.replace(/gulas?/gi, '<span class="highlight-gula">$&</span>');
  }
}
