import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import posthog from 'posthog-js';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  trackAction(action: string, properties: any = {}): any {
    posthog.capture(action, properties);

    return this.http.post(`${this.baseUrl}/tracking`, {
      name: action,
      parameters: properties,
    });
  }
}
