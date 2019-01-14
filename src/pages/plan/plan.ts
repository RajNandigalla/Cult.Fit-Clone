import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoPage } from './todo/todo';
import { MyPacksPage } from './myPacks/myPacks';
import { ChallengesPage } from './Challenges/challenges';

@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html'
})
export class PlanPage {

  page1 = TodoPage;
  page2 = MyPacksPage;
  page3 = ChallengesPage;

  constructor(
    public navCtrl: NavController
  ) { }
}
