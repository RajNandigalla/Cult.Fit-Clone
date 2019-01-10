import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface ImeData {
  name: string;
  icon: string;
}

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {

  public meData: ImeData[] = [
    { name: 'Account', icon: './../assets/imgs/me/app_resources_account_account.png' },
    { name: 'Orders', icon: './../assets/imgs/me/app_resources_account_orders.png' },
    { name: 'My Challenges', icon: './../assets/imgs/me/app_resources_social_challenges_challenges_icon.png' },
    { name: 'Active Packs / Subscriptions', icon: './../assets/imgs/me/app_resources_account_pack.png' },
    { name: 'Medical Records', icon: './../assets/imgs/me/app_resources_account_healthprofile.png' },
    { name: 'Fitness Devices', icon: './../assets/imgs/me/app_resources_account_fitnessband.png' },
    { name: 'Support', icon: './../assets/imgs/me/app_resources_account_support.png' },
    { name: 'App Update', icon: './../assets/imgs/me/app_resources_account_done.png' },
  ];

  constructor(public navCtrl: NavController) {

  }

}
