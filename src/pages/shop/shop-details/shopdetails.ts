import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-shop-details',
    templateUrl: 'shopdetails.html'
})
export class shopDetailsPage {

    public img = this.navParams.get('img');
    public count = this.navParams.get('count');

    constructor(
        private navCtrl: NavController,
        private navParams: NavParams
    ) { }

    public popPage() {
        this.navCtrl.pop();
    }
}
