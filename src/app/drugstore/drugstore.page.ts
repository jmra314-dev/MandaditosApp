import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drugstore',
  templateUrl: './drugstore.page.html',
  styleUrls: ['./drugstore.page.scss'],
})
export class DrugstorePage implements OnInit {
infoProduct: any
addItem:any=[]
  constructor() { }

  ngOnInit() {
    this.getInfoProduct()
  }
getInfoProduct(){
  this.infoProduct=[
{val:'1',isChecked:true,nombre:'Sabritas',precio:'23.89',descripcion:'chalahalcahacalla hjash ahs akujahs  lorem imsup',img:'assets/img/imgPedidos.png'},
{nombre:'Sabritas',precio:'23.89',descripcion:'chalahalcahacalla hjash ahs akujahs  lorem imsup',img:'assets/img/imgPedidos.png'},
{nombre:'Sabritas',precio:'23.89',descripcion:'chalahalcahacalla hjash ahs akujahs  lorem imsup',img:'assets/img/imgPedidos.png'},
{nombre:'Sabritas',precio:'23.89',descripcion:'chalahalcahacalla hjash ahs akujahs  lorem imsup',img:'assets/img/imgPedidos.png'},
{nombre:'Sabritas',precio:'23.89',descripcion:'chalahalcahacalla hjash ahs akujahs  lorem imsup',img:'assets/img/imgPedidos.png'},
{nombre:'Sabritas',precio:'23.89',descripcion:'chalahalcahacalla hjash ahs akujahs  lorem imsup',img:'assets/img/imgPedidos.png'},
{nombre:'Sabritas',precio:'23.89',descripcion:'chalahalcahacalla hjash ahs akujahs  lorem imsup',img:'assets/img/imgPedidos.png'},
{nombre:'Sabritas',precio:'23.89',descripcion:'chalahalcahacalla hjash ahs akujahs  lorem imsup',img:'assets/img/imgPedidos.png'},
{nombre:'Sabritas',precio:'23.89',descripcion:'chalahalcahacalla hjash ahs akujahs  lorem imsup',img:'assets/img/imgPedidos.png'},
{nombre:'Sabritas',precio:'23.89',descripcion:'chalahalcahacalla hjash ahs akujahs  lorem imsup',img:'assets/img/imgPedidos.png'},
{nombre:'Sabritas',precio:'23.89',descripcion:'chalahalcahacalla hjash ahs akujahs  lorem imsup',img:'assets/img/imgPedidos.png'},
{nombre:'Sabritas',precio:'23.89',descripcion:'chalahalcahacalla hjash ahs akujahs  lorem imsup',img:'assets/img/imgPedidos.png'},
{nombre:'Sabritas',precio:'23.89',descripcion:'chalahalcahacalla hjash ahs akujahs  lorem imsup',img:'assets/img/imgPedidos.png'},
{nombre:'Sabritas',precio:'23.89',descripcion:'chalahalcahacalla hjash ahs akujahs  lorem imsup',img:'assets/img/imgPedidos.png'},


  ]
}
addCart(){
  alert("agrega el producto");
  console.log(this.addItem)
}
add(item){
  this.addItem.push(item.nombre)
}
}
