import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Geolocation} from  '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';

declare var google;
@Component({
  selector: 'app-map-ubication',
  templateUrl: './map-ubication.page.html',
  styleUrls: ['./map-ubication.page.scss'],
})
export class MapUbicationPage implements OnInit {
  @ViewChild('mapa') mapContainer: ElementRef;
  map: any;
  mapEle : HTMLElement;
  latitud:any
  longitud:any
  constructor(private geolocation : Geolocation , private modalController: ModalController) { }

  ngOnInit() {
    this.getPosition()
  }
  getPosition():any{
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(position){

    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    this.latitud = latitude;
    this.longitud = longitude;
  
    // create a new map by passing HTMLElement
    this.mapEle = document.getElementById('mapa');
  
    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};
  
    // create map
    this.map = new google.maps.Map(this.mapEle, {
      center: myLatLng,
      disableDefaultUI: false,   
      zoom: 16
    });
var image ='https://s3.amazonaws.com/estrategas/icons-incidences/pin5.png';
    var marker = new google.maps.Marker({
      map:this.map,
      draggable: true,
      icon : image,
   //   animation: google.maps.Animation.DROP,
      position: myLatLng
    });
   


google.maps.event.addListener(marker,'dragend', (event)=>{

 this.latitud = event.latLng.lat()
 this.longitud = event.latLng.lng()
    });
    this.mapEle.classList.add('show-map'); 
   
   
  }
  exit(){
let position = {lat:this.latitud, lng:this.longitud}
    this.modalController.dismiss({ position});
  }
}
