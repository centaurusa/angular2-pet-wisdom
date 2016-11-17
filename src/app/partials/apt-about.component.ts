import { Component } from '@angular/core';

@Component({
  selector: 'apt-about',
  template:
  `
    <div class="container main">
      <h2>About page</h2>
    </div>
  `,
  styles: [
    `
      .container.main {
        min-height: 660px;
      }
    `
  ]
})

export class AptAboutComponent {

}
