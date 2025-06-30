import { Component } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/common/header/header.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import posthog from 'posthog-js';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'Football Detector';
  showHeader = false;

  constructor(
    private router: Router,
    private contexts: ChildrenOutletContexts
  ) {
    // Subscribe to router events to check the current route
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.showHeader = event.urlAfterRedirects !== '/login'; // Show header unless it's the login page
      posthog.capture('$pageview');
    });
  }

  getRouteAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
