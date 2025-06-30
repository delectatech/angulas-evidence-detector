import { Injectable } from '@angular/core';
import { TableLazyLoadEvent } from 'primeng/table';
import { FilterMetadata } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class DatatablesAdapterService {
  constructor() {}

  public convertToDatatablesFormat(data: TableLazyLoadEvent): string {
    const params = new URLSearchParams();

    // Pagination
    params.append('offset', data.first!.toString());
    params.append('limit', data.rows ? data.rows.toString() : '-1');

    // Sort
    if (data.sortField && data.sortOrder) {
      // Assuming sort order 1 is 'asc' and -1 is 'desc', and using '0' as the default column index
      const sortOrder = data.sortOrder === 1 ? 'asc' : 'desc';
      params.append('sortField', data.sortField as string);
      params.append('sortOrder', sortOrder);
    }

    // Filters
    if (data.filters) {
      Object.entries(data.filters).forEach(([key, filter]) => {
        params.append(`${key}`, (filter as FilterMetadata)!.value);
      });
    }

    return params.toString();
  }
}
