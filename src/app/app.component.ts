import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main id="root">
      <app-header></app-header>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class AppComponent {
  title = 'testUser';
}
