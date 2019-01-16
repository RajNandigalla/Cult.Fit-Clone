import { Component, AfterViewInit } from '@angular/core';
import { PlanPage } from '../plan/plan';
import { ShopPage } from '../shop/shop';
import { MePage } from '../me/me';
import { SuperTabsController } from '../../_components/slide-tabs';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage implements AfterViewInit {

  tab1Root = PlanPage;
  tab2Root = ShopPage;
  tab3Root = MePage;


  constructor(
    private tabCtrl: SuperTabsController
  ) { }


  public ngAfterViewInit(): void {
    this.tabCtrl.enableTabsSwipe(false);
  }

}
