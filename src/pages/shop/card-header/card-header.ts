import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'card-header',
  template: `
      <div class="card-header-custom">
        <div>
          <span class="title">{{Title}}</span>
          <span class="subtitle">{{subTitle}}</span>
        </div>
        <img src="./../../../assets/imgs/common/right-arrow.png" />
      </div>
`
})
export class CardHeaderComponent {

  @Input('title') Title;
  @Input('subtitle') subTitle;

  constructor() {
  }

}