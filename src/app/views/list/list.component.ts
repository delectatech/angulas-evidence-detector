import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, TemplateRef } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { BehaviorSubject } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { RestaurantDataTable } from '../../core/models/restaurants.model';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CheckboxModule } from 'primeng/checkbox';
import { TrackingService } from '@app/core/services/tracking.service';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EelSpinnerComponent } from '../../core/common/eel-spinner/eel-spinner';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    InputSwitchModule,
    ButtonModule,
    FormsModule,
    TagModule,
    RouterModule,
    ProgressBarModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    SelectButtonModule,
    TooltipModule,
    IconFieldModule,
    InputIconModule,
    SliderModule,
    CheckboxModule,
    MessagesModule,
    MessageModule,
    MatDialogModule,
    MatButtonModule,
    EelSpinnerComponent
],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  data: RestaurantDataTable[] = [];
  cols: any[] = [];
  establishments$: BehaviorSubject<RestaurantDataTable[]> = new BehaviorSubject<RestaurantDataTable[]>([]);
  loading: boolean = false;
  totalRecords: number = 0;
  provincesOptions = [];
  evidenceOptions = [
    { name: 'Todas', value: 'all' },
    { name: 'Con menú', value: 'menu' },
    { name: 'Con comentarios', value: 'comments' }
  ];
  selectedEvidence: string = 'all';
  selectedEvidences: string[] = ['all'];
  imagesWithFootballChecked: boolean = false;
  commentsWithFootballChecked: boolean = false;
  rangeValues: number[] = [0, 100];
  selectedProvince = '';
  filterParameters = '';
  sortField = 'score';
  sortOrder = -1;
  first = 0;
  searchValue: string = '';
  noEstablishmentsFoundMessage = [[{ severity: 'info', detail: 'No hay establecimientos a mostrar actualmente.' }]];
  private currentFilters: any = {};
  @ViewChild('establishmentsTable') establishmentTable!: Table;
  @ViewChild('methodologyTemplate', { static: true }) methodologyTemplate!: TemplateRef<any>;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private trackingService: TrackingService,
    private dialog: MatDialog
  ) {}
  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Nombre', orderable: true },
      { field: 'streetAddress', header: 'Dirección', orderable: false },
      { field: 'provinceName', header: 'Provincia', orderable: false },
      { field: 'regionName', header: 'Región', orderable: false },
      { field: 'score', header: 'Score', orderable: true },
      {
        field: 'total_images',
        header: 'Menús con evidencias',
        orderable: false,
      },
      {
        field: 'total_comments',
        header: 'Comentarios con evidencias',
        orderable: false,
      },
    ];
    this.loadFiltersFromLocalStore();
    this.loadProvincesOptions();
  }

  loadList(event: TableLazyLoadEvent) {
    this.loading = true;

    this.apiService.loadList(event).subscribe({
      next: (resp) => {
        this.totalRecords = resp.total;
        this.evidenceOptions[0].value+= this.totalRecords;
        const transformedData = resp.data.map((item: any) => {
            return {
            ...item,
            score: item.score ? (parseFloat(item.score) * 100).toFixed(2).replace('.', ',') + '%' : '0,00%',
            score_progressBar: item.score ? (parseFloat(item.score) * 100).toFixed(0) : '0',
            };
        });
        this.establishments$.next(transformedData);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        console.error('Error al cargar las cuentas =>', error);
      },
    });
  }

  loadProvincesOptions() {
    this.apiService.loadProvincesOptions().subscribe({
      next: (resp: any) => {
        this.provincesOptions = resp;
      },
    });
  }

  onLazyLoad(event: TableLazyLoadEvent) {
    const combinedEvent: TableLazyLoadEvent = {
      ...event,
      globalFilter: null,
      filters: {
        ...this.currentFilters,
        ...event.filters,
      },
    };
    if (combinedEvent.filters && combinedEvent.filters['global']) {
      delete combinedEvent.filters['global'];
    }
    // Asegura que combinedEvent.filters siempre existe
    combinedEvent.filters = combinedEvent.filters || {};

    // Si this.searchValue está presente, añade 'searchText'
    if (this.searchValue && this.searchValue != '') {
      combinedEvent.filters['searchText'] = {
        value: this.searchValue,
        matchMode: 'contains',
      };
    } else {
      delete combinedEvent.filters['searchText'];
    }
    this.sortField = (event.sortField as string) || 'score';
    this.sortOrder = event.sortOrder || -1;
    this.first = event.first || 0;
    this.saveFiltersToLocalStore();

    this.loadList(combinedEvent);
  }

  applyFilter() {
    this.loading = true;
    const filters: any = {
      scoreLowerBound: { value: this.rangeValues[0] },
      scoreUpperBound: { value: this.rangeValues[1] },
    };

    if (this.selectedProvince) {
      filters.provinceUid = { value: this.selectedProvince };
    }

    // Handle SelectButton evidences filter (OR logic)
    if (this.selectedEvidence === 'menu') {
      filters.hasElversMenus = { value: true };
    } else if (this.selectedEvidence === 'comments') {
      filters.hasElversComments = { value: true };
    }
    // If 'all' is selected, don't apply specific filters

    // Si this.searchValue está presente, añade 'searchText'
    if (this.searchValue && this.searchValue != '') {
      filters['searchText'] = {
        value: this.searchValue,
        matchMode: 'contains',
      };
    } else {
      delete filters['searchText'];
    }

    this.currentFilters = filters;
    this.establishmentTable.first = 0;
    this.first = 0;
    this.saveFiltersToLocalStore();

    const event: TableLazyLoadEvent = {
      filters: filters,
      first: 0,
      rows: this.establishmentTable.rows,
      sortField: this.establishmentTable.sortField,
      sortOrder: this.establishmentTable.sortOrder,
    };
    this.loadList(event);
  }

  resetFilter() {
    this.searchValue = '';
    this.rangeValues = [0, 100];
    this.selectedProvince = '';
    this.selectedEvidence = 'all';
    this.selectedEvidences = ['all'];
    this.imagesWithFootballChecked = false;
    this.commentsWithFootballChecked = false;
    this.currentFilters = {};
    this.sortField = 'score';
    this.sortOrder = -1;
    this.applyFilter();
  }

  redirectDetail(uid: any) {
    this.router.navigate(['/establecimiento', uid]);
  }

  redirectDirection(directions: any, uid?: string) {
    let type = 'none';
    if (directions.googleUrl != null) {
      type = 'google_map';
      window.open(directions.googleUrl, '_blank');
    } else if (directions.tripAdvisorUrl != null) {
      type = 'tripadvisor';
      window.open(directions.tripAdvisorUrl, '_blank');
    }
    this.sendTracking('open_street_direction_from_list', { parameters: { establishment_Uid: uid, redirect_website: type } });
  }

  saveFiltersToLocalStore() {
    sessionStorage.setItem('searchValue', this.searchValue);
    sessionStorage.setItem('filters', JSON.stringify(this.currentFilters));
    sessionStorage.setItem('selectedProvince', this.selectedProvince);
    sessionStorage.setItem('selectedEvidence', this.selectedEvidence);
    sessionStorage.setItem('selectedEvidences', JSON.stringify(this.selectedEvidences));
    sessionStorage.setItem('imagesWithFootballChecked', this.imagesWithFootballChecked.toString());
    sessionStorage.setItem('commentsWithFootballChecked', this.commentsWithFootballChecked.toString());
    sessionStorage.setItem('rangeValues', JSON.stringify(this.rangeValues));
    sessionStorage.setItem('sortField', this.sortField);
    sessionStorage.setItem('sortOrder', this.sortOrder.toString());
    sessionStorage.setItem('first', this.first.toString());
  }

  loadFiltersFromLocalStore() {
    this.searchValue = sessionStorage.getItem('searchValue') || '';
    this.currentFilters = JSON.parse(sessionStorage.getItem('filters') || '{}');
    this.selectedProvince = sessionStorage.getItem('selectedProvince') || '';
    this.selectedEvidence = sessionStorage.getItem('selectedEvidence') || 'all';
    this.selectedEvidences = JSON.parse(sessionStorage.getItem('selectedEvidences') || '["all"]');
    this.imagesWithFootballChecked = sessionStorage.getItem('imagesWithFootballChecked') == 'true';
    this.commentsWithFootballChecked = sessionStorage.getItem('commentsWithFootballChecked') == 'true';
    this.rangeValues = JSON.parse(sessionStorage.getItem('rangeValues') || '[0, 100]');
    this.sortField = sessionStorage.getItem('sortField') || 'score';
    this.sortOrder = parseInt(sessionStorage.getItem('sortOrder') || '-1');
    this.first = parseInt(sessionStorage.getItem('first') || '0');
  }

  sendTracking(name: string, parameters: Record<string, any>) {
    this.trackingService.trackAction(name, parameters).subscribe();
  }

  getFullAddress(rowData: any): string {
    const parts: string[] = [];
    
    if (rowData.streetAddress) {
      parts.push(rowData.streetAddress);
    }
    
    if (rowData.numberAddress) {
      parts.push(rowData.numberAddress);
    }
    
    if (rowData.cityName) {
      parts.push(rowData.cityName);
    }
    
    return parts.join(', ');
  }

  showMethodology() {
    this.dialog.open(this.methodologyTemplate, {
      maxWidth: '80vw'
    });
  }
}
