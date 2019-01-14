import { Component, AfterViewInit } from '@angular/core';
import { PlanPage } from '../plan/plan';
import { ShopPage } from '../shop/shop';
import { MePage } from '../me/me';
import { ModalController, Platform } from 'ionic-angular';
import { ConfirmModal } from '../../modals/confirmModal/confirmModal';
import { YES } from '../../modals/modalConstants';
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
    private modal: ModalController,
    private platform: Platform,
    private tabCtrl: SuperTabsController
  ) { }

  public logout = () => {
    let logout = this.modal.create(ConfirmModal);
    logout.onDidDismiss(res => {
      if (res === YES) this.platform.exitApp();
    });
    logout.present();
  }

  public ngAfterViewInit(): void {
    this.tabCtrl.enableTabsSwipe(false);
  }

}
