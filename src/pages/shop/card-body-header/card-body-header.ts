import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-body-header',
  template: `
         <div> <span class="title">{{Title}}</span></div>
`
})
export class CardBodyHeaderComponent {

  @Input('title') Title;



}