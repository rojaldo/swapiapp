import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CharactersPage } from '../pages/characters/characters';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PlanetsPage } from '../pages/planets/planets';
import { DetailsPage } from '../pages/details/details';
import { CharacterDetailsPage } from '../pages/character-details/character-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RequestProvider } from '../providers/request/request';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    CharactersPage,
    HomePage,
    TabsPage,
    PlanetsPage,
    DetailsPage,
    CharacterDetailsPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CharactersPage,
    HomePage,
    TabsPage,
    PlanetsPage,
    DetailsPage,
    CharacterDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RequestProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RequestProvider
  ]
})
export class AppModule {}
