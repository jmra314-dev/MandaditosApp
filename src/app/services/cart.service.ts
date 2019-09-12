import { Injectable } from '@angular/core';
import * as firebase from 'firebase' 
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private categories =[
    { nombre:'Farmacia',img:'',id:1},
    { nombre:'Farmacia',img:'',id:1},
    { nombre:'Farmacia',img:'',id:1},
    { nombre:'Farmacia',img:'',id:1},
    { nombre:'Farmacia',img:'',id:1},
    { nombre:'Farmacia',img:'',id:1},
    { nombre:'Farmacia',img:'',id:1},
    { nombre:'Farmacia',img:'',id:1},
    { nombre:'Farmacia',img:'',id:1},
    { nombre:'Farmacia',img:'',id:1},
    { nombre:'Farmacia',img:'',id:1},

  ]
  
  



  private data = [
    {
      category: 'Medicamentos',
      expanded: true,
      products: [
        { id: 0, name: 'Paracetamol 500 mg', price: '8',descripcion:'quita el dolor muy rapido' },
        { id: 0, name: 'Paracetamol 500 mg', price: '8',descripcion:'quita el dolor muy rapido' },
        { id: 0, name: 'Paracetamol 500 mg', price: '8',descripcion:'quita el dolor muy rapido' },
        { id: 0, name: 'Paracetamol 500 mg', price: '8',descripcion:'quita el dolor muy rapido' },
        { id: 0, name: 'Paracetamol 500 mg', price: '8',descripcion:'quita el dolor muy rapido' },
        { id: 0, name: 'Paracetamol 500 mg', price: '8',descripcion:'quita el dolor muy rapido' },
        { id: 0, name: 'Paracetamol 500 mg', price: '8',descripcion:'quita el dolor muy rapido' },
        { id: 0, name: 'Paracetamol 500 mg', price: '8',descripcion:'quita el dolor muy rapido' },
        { id: 0, name: 'Paracetamol 500 mg', price: '8',descripcion:'quita el dolor muy rapido' },
        { id: 1, name: 'Ibuprofeno', price: '5',descripcion:'quita el dolor muy rapido'  },
        { id: 2, name: 'Jabon neutro', price: '9',descripcion:'quita el dolor muy rapido'  },
        { id: 3, name: 'Alcohol', price: '7',descripcion:'quita el dolor muy rapido'  }
      ]
    },
    {
      category: 'Bebidas',
      products: [
        { id: 4, name: 'Cerveza sol', price: '8',descripcion:'quita el dolor muy rapido'  },
        { id: 5, name: 'Coca-cola', price: '6',descripcion:'quita el dolor muy rapido'  }
      ]
    },
    {
      category: 'Panaderia',
      products: [
        { id: 6, name: 'Dona', price: '8',descripcion:'quita el dolor muy rapido'  },
        { id: 7, name: 'Telera', price: '5',descripcion:'quita el dolor muy rapido'  },
        { id: 8, name: 'Mantexada', price: '9',descripcion:'quita el dolor muy rapido'  },
        { id: 6, name: 'Dona', price: '8',descripcion:'quita el dolor muy rapido'  },
        { id: 7, name: 'Telera', price: '5',descripcion:'quita el dolor muy rapido'  },
        { id: 8, name: 'Mantexada', price: '9',descripcion:'quita el dolor muy rapido'  },
        { id: 6, name: 'Dona', price: '8',descripcion:'quita el dolor muy rapido'  },
        { id: 7, name: 'Telera', price: '5',descripcion:'quita el dolor muy rapido'  },
        { id: 8, name: 'Mantexada', price: '9',descripcion:'quita el dolor muy rapido'  },
        { id: 6, name: 'Dona', price: '8',descripcion:'quita el dolor muy rapido'  },
        { id: 7, name: 'Telera', price: '5',descripcion:'quita el dolor muy rapido'  },
        { id: 8, name: 'Mantexada', price: '9',descripcion:'quita el dolor muy rapido'  },
        { id: 6, name: 'Dona', price: '8',descripcion:'quita el dolor muy rapido'  },
        { id: 7, name: 'Telera', price: '5',descripcion:'quita el dolor muy rapido'  },
        { id: 8, name: 'Mantexada', price: '9',descripcion:'quita el dolor muy rapido'  }
      ]
    }
  ];
 
  private cart = [];
 
  constructor(private db : AngularFirestore) { }
 
  getProducts() {
    return this.data;
  }
 getCategories(){
   return this.categories
 }
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }

  getProductsFirebase(){
    let currentUser = {uid:'p31MWhJz18Qe5BU7sRMOE7F3jsB2'}
    console.log(currentUser)
//let currentUser = firebase.auth().currentUser
   this.db.collection('mandaditosApp').doc(currentUser.uid).snapshotChanges().subscribe(res=>{
    console.log(res)
  })
 

  }
}
