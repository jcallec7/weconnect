import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  optionsMap = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 15,
        attribution: ""
      })
    ],
    zoom: 12,
    center: L.latLng(-2.90055, -79.00453)
  };


  onMapReady(map:any) {

    var circle = L.circle([-3.25861, -79.96053], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(map);
    circle.bindPopup("reclamos: 20");

    var circle = L.circle([-3.28000, -79.96800], {
      color: 'yellow',
      fillColor: '#fc0',
      fillOpacity: 0.5,
      radius: 300
    }).addTo(map);
    circle.bindPopup("reclamos: 5");

  }

  ngOnInit(): void {
  }

  

}
