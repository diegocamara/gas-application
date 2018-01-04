import { MapPage } from './../map/map';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  current: any = MapPage;

  constructor(public navCtrl: NavController) {

  }



}
