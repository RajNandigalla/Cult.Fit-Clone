import { Component } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';
import { TodoPage } from './todo/todo';
import { MyPacksPage } from './myPacks/myPacks';
import { ChallengesPage } from './Challenges/challenges';
import { ConfirmModal } from '../../modals/confirmModal/confirmModal';
import { YES } from '../../modals/modalConstants';

@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html'
})
export class PlanPage {

  page1 = TodoPage;
  page2 = MyPacksPage;
  page3 = ChallengesPage;

  constructor(
    private modal: ModalController,
    private platform: Platform,
    public navCtrl: NavController
  ) { }


  public logout = () => {
    let logout = this.modal.create(ConfirmModal);
    logout.onDidDismiss(res => {
      if (res === YES) this.platform.exitApp();
    });
    logout.present();
  }
}
