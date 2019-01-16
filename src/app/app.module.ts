import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlanPage } from '../pages/plan/plan';
import { ShopPage } from '../pages/shop/shop';
import { MePage } from '../pages/me/me';
import { TodoPage } from '../pages/plan/todo/todo';
import { CardHeaderComponent } from '../pages/shop/card-header/card-header';
import { CardBodyHeaderComponent } from '../pages/shop/card-body-header/card-body-header';
import { ConfirmModal } from '../_modals/confirm-modal/confirmmodal';
import { MyPacksPage } from '../pages/plan/mypacks/mypacks';
import { ChallengesPage } from '../pages/plan/challenges/challenges';
import { SuperTabsModule } from '../_components/slide-tabs';
import { ComingSoonPage } from '../_components/coming-soon/coming-soon';
import { shopDetailsPage } from '../pages/shop/shop-details/shopdetails';

const _components = [
  CardHeaderComponent,
  CardBodyHeaderComponent,
  ComingSoonPage,
];

const _modals = [
  ConfirmModal,
]

const _Pages = [
  MyApp,
  PlanPage,
  ShopPage,
  MePage,
  TabsPage,
  TodoPage,
  MyPacksPage,
  ChallengesPage,
  shopDetailsPage
];

@NgModule({
  declarations: [..._Pages, ..._components, ..._modals],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents:  [..._Pages, ..._components, ..._modals],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AndroidFullScreen
  ]
})
export class AppModule { }
