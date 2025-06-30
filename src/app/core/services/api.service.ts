import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableLazyLoadEvent } from 'primeng/table';
import { Observable, of } from 'rxjs';
import { DatatablesAdapterService } from '../common/datatables-adapter.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly API_URL = environment.apiUrl;

  constructor(
    private readonly http: HttpClient,
    private readonly dtAdapter: DatatablesAdapterService
  ) {}

  loadList(data: TableLazyLoadEvent | null): Observable<any> {
    if (!data) {
      // Return observable of empty array if no data is provided
      return of({
        start: 0,
        recordsTotal: 0,
        recordsFiltered: 0,
        data: [],
      });
    }
    const params = this.dtAdapter.convertToDatatablesFormat(data);
    return this.http.get<any>(`${this.API_URL}/restaurant?${params}`);
  }

  loadProvincesOptions(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/restaurant/provinces`);
  }

  loadEstablishmentData(uid: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/restaurant/${uid}`);
  }

  sendTracking(name: string, parameters: Record<string, any>): Observable<any> {
    parameters['name'] = name;
    return this.http.post<any>(`${this.API_URL}/tracking`, parameters);
  }
}
