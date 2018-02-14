import { PagesModule } from './../pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Application } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    Application,
    HomePage
  ],
  imports: [
    BrowserModule,
    PagesModule,
    IonicModule.forRoot(Application)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Application,
    HomePage
  ],
  // providers: [
  //   StatusBar,
  //   SplashScreen,
  //   {provide: ErrorHandler, useClass: IonicErrorHandler}
  // ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
