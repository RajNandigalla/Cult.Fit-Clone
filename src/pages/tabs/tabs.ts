import { Component } from '@angular/core';
import { PlanPage } from '../plan/plan';
import { ShopPage } from '../shop/shop';
import { MePage } from '../me/me';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PlanPage;
  tab2Root = ShopPage;
  tab3Root = MePage;

  constructor() {

  }
}
