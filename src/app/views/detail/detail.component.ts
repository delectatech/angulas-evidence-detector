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
  filteredComments: any[] = [];
  filterSoccerComment: boolean = false;
  filterSportsComment: boolean = false;
  galleryVisible: boolean = false;
  displayGallery: boolean = false;
  activeIndex: number = 0;
  allImagesLoaded: boolean = false;
  loadedImagesCount: number = 0;
  noImagesFound: boolean = false;
  noCommentsFound: boolean = false;
  noImagesFiltered: boolean = false;
  noCommentsFiltered: boolean = false;
  visibleIndicators: number[] = []; // Array que almacenará los indicadores visibles
  maxIndicators: number = 5; // Número máximo de indicadores visibles a la vez
  warningMessages = [
    [
      {
        severity: 'warn',
        detail: 'Este establecimiento no tiene imágenes',
      },
    ],
    [
      {
        severity: 'warn',
        detail: 'Este establecimiento no tiene comentarios',
      },
    ],
    [{ severity: 'info', detail: 'No hay imágenes con esos filtros' }],
    [{ severity: 'info', detail: 'No hay comentarios con esos filtros' }],
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
        if (this.establishmentData.evidences.images.details) {
          this.noImagesFound = false;
          this.filteredImages = this.establishmentData.evidences.images.details;
        } else {
          this.noImagesFound = true;
        }

        if (this.establishmentData.evidences.comments.details) {
          this.noCommentsFound = false;
          this.filteredComments = this.establishmentData.evidences.comments.details;
          this.establishmentData.potential_ratio = parseFloat(this.establishmentData.potential_ratio).toFixed(0);
        } else {
          this.noCommentsFound = true;
        }
      },
    });
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
    this.sendTracking('image_gallery_filter', { parameters: { establishment_uid: this.uid, filter_tv: this.filterTv, filter_tv_soccer: this.filterTvSoccer } });
    let allowedLabels: string[] = [];
    if (!this.filterTv && !this.filterTvSoccer) {
      this.filteredImages = this.establishmentData.evidences.images.details;
      this.noImagesFiltered = false;
    } else {
      if (this.filterTv) {
        allowedLabels.push('tv');
      }
      if (this.filterTvSoccer) {
        allowedLabels.push('tv with soccer');
      }

      this.filteredImages = this.establishmentData.evidences.images.details.filter((image: any) => {
        return allowedLabels.some((label) => image.label === label);
      });
      this.noImagesFiltered = this.filteredImages.length == 0;
    }
  }

  applyCommentFilter() {
    this.sendTracking('comments_list_filter', { parameters: { establishment_uid: this.uid, filter_soccer_comment: this.filterSoccerComment, filter_sports_comment: this.filterSportsComment } });
    let allowedLabels: string[] = [];

    if (!this.filterSoccerComment && !this.filterSportsComment) {
      this.filteredComments = this.establishmentData.evidences.comments.details;
      this.noCommentsFiltered = false;
    } else {
      if (this.filterSoccerComment) {
        allowedLabels.push('soccer_comment');
      }
      if (this.filterSportsComment) {
        allowedLabels.push('sports_comment');
      }

      this.filteredComments = this.establishmentData.evidences.comments.details.filter((comment: any) => {
        return allowedLabels.some((label) => comment.label === label);
      });
      this.noCommentsFiltered = this.filteredComments.length <= 0;
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
      default:
        return 'info';
    }
  }

  imageClick(index: number, image_url?: string) {
    this.activeIndex = index;
    this.displayGallery = true;
    this.sendTracking('image_gallery_click', { parameters: { establishment_uid: this.uid, image_url: image_url } });
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
}
