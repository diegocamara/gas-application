import { AboutPage } from './about/about';
import { MapPage } from './map/map';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular/module';

export const APP_PAGES = [MapPage, AboutPage];

@NgModule({
    imports:[
        CommonModule,
        IonicModule.forRoot(APP_PAGES)
    ],
    declarations: APP_PAGES    
})
export class PagesModule {

}


