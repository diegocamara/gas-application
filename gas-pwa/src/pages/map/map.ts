import { NavController } from 'ionic-angular';
import { Component, ElementRef, ViewChild } from '@angular/core';
import leaflet from 'leaflet';

const RECIFE = [-8.0403523, -34.9037189];

@Component({
    selector: 'page-map',
    templateUrl: 'map.html'
})
export class MapPage {

    @ViewChild('map') mapContainer: ElementRef;
    map: any;

    constructor(public navController: NavController) {

    }

    ionViewDidEnter() {
        this.loadMap();
        // console.log(this.map);
    }

    loadMap() {

        let tilelayerOptions = {
            maxZoom: 18,
            detectRetina: true
        }

        let tileLayer = leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', tilelayerOptions);
        
        let mapOptions = { zoomControl: false, center: RECIFE, zoom: 12 };

        this.map = leaflet.map("map", mapOptions);

        tileLayer.addTo(this.map);

    }

}