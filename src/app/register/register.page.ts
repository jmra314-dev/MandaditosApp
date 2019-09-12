import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapUbicationPage } from '../map-ubication/map-ubication.page';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase'


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
employe: boolean = false
user : boolean= false
business: boolean= false
img: boolean = true
location : any
  emailBusiness: string;
  passwordBusiness: string;
  direccionBusiness: any;
  latitud: number =0;
  longitud: number=0;
  category: string;
  nameBusiness: string;
  constructor(private modalController : ModalController, private firebaseAuth :AuthService) { }

  ngOnInit() {
  }
active(id){
  switch (id){
    case 1:this.user = true; this.business = false; this.employe= false;this.img=false; break;
    case 2:this.user = false; this.business = false; this.employe= true;this.img=false;  break;
    case 3:this.user = false; this.business = true; this.employe= false;this.img=false;  break;
  }
}
  async mapUbication(){
    const modal = await this.modalController.create({
      component: MapUbicationPage
    });

     await modal.present();
     modal.onDidDismiss().then(data=>{
     this.latitud=data.data.position.lat
     this.longitud = data.data.position.lng
      

       console.log(this.latitud,this.longitud)
      
     })

}

registerBusiness(){
  if(this.emailBusiness==''||this.passwordBusiness==''||this.direccionBusiness==null||this.latitud==0||this.category==''){
    alert('Faltan datos para el registro!!')
  }else{
    let email = this.emailBusiness;
    let password = this.passwordBusiness;
    let address = this.direccionBusiness;
    let lat = this.latitud;
    let lng = this.longitud
    let category = this.category
    let name = this.nameBusiness
    this.firebaseAuth.registerBusiness(email,password,name,address,category, lat,lng).then(res=>{
      console.log(res)
    })
  } 
}

}

