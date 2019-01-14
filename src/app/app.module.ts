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
import { ConfirmModal } from '../modals/confirmModal/confirmModal';
import { TodoPage } from '../pages/plan/todo/todo';
import { MyPacksPage } from '../pages/plan/myPacks/myPacks';
import { ChallengesPage } from '../pages/plan/Challenges/challenges';
import { SuperTabsModule } from '../_components/slide-tabs';

const _Pages = [
  MyApp,
  PlanPage,
  ShopPage,
  MePage,
  TabsPage,
  ConfirmModal,
  TodoPage,
  MyPacksPage,
  ChallengesPage
];

@NgModule({
  declarations: [..._Pages],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [..._Pages],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AndroidFullScreen
  ]
})
export class AppModule { }
