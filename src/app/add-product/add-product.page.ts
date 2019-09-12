import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  productName: string='';
  productDescription:string='';
  productPrice:number=0;
  productQuantity=0;
products:any[]
  constructor(private firebase : FirebaseService,private alertController: AlertController) { }

  ngOnInit() {
    this.getItems()
  }


addItemPhoto(){
  alert("agrega la foto del producto")
}
async getItems(){


  this.firebase.getItems().subscribe(data => {
 
    this.products = data.map(e => {
      return {
        id: e.payload.doc.id,
        name: e.payload.doc.data()['name'],
        price: e.payload.doc.data()['price'],
        description: e.payload.doc.data()['description'],
        quantity: e.payload.doc.data()['quantity'],
      };
    })
    console.log(this.products);

  });


}

createItem(){
  if(this.productPrice==0||this.productName==''||this.productDescription==''){
    alert('Completa los datos de tu producto')
  }else{
    let data = {name:this.productName,price:this.productPrice, quantity:this.productQuantity, description:this.productDescription}
    this.firebase.createItem(data)
    this.productDescription='';
    this.productName='';
    this.productQuantity=0;
    
  }
}
async addPrompt() {
  const alert = await this.alertController.create({
    header: 'Agregar un producto',
    inputs: [
      {
        name: 'productName',
        type: 'text',
        placeholder:'Nombre del producto'
        
      },
      {
        
        name: 'productPrice',
        type: 'number',
        placeholder:'Precio'
      },
      {
        
        name: 'productDescription',
        type:'text',
        placeholder:'Breve descripción'
      },
      {
      
        name: 'productQuantity',
        type: 'number',
        placeholder:'Cantidad disponible'
      },
    

  
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Aceptar',
        handler: (data) => {
          this.productDescription = data.productDescription;
          this.productName = data.productName;
          this.productPrice = data.productPrice;
          this.productQuantity=data.productQuantity
          this.createItem();
          console.log(data);
        }
      }
    ]
  });

  await alert.present();
}
}
