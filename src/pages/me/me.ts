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
    { name: 'Account', icon: '' },
    { name: 'Orders', icon: '' },
    { name: 'My Challenges', icon: '' },
    { name: 'Active Packs / Subscriptions', icon: '' },
    { name: 'Medical Records', icon: '' },
    { name: 'Fitness Devices', icon: '' },
    { name: 'Support', icon: '' },
    { name: 'App Update', icon: '' },
  ];

  constructor(public navCtrl: NavController) {

  }

}
