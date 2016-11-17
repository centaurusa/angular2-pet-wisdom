import { Component } from '@angular/core';

@Component({
  selector: 'page-not-found',
  template:
  `
    <div class="container main">
      <h2>The page not found</h2>
    </div>
  `,
  styles: [
    `
      .container.main {
        min-height: 660px;
        text-align: left;
      }
    `
  ]
})

export class PageNotFoundComponent {

}
