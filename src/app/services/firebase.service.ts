import { Injectable } from '@angular/core';
import * as firebase from 'firebase' 
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  snapshotChangesSubscription: any;

  constructor(private db : AngularFirestore) { }


  addItem(data){
    const user = firebase.auth().currentUser
    console.log(user.uid)
    this.db.collection('mandaditosApp/'+user.uid+'/products').doc('Pinol').set({
name:data.name,
description:data.description,
price:data.price,
quantity:data.quantity

    })
  }
  createItem(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.db.collection('mandaditosApp').doc(currentUser.uid)
      .collection('Productos').add({
        name: value.name,
        description: value.description,
        price: value.price,
        quantity: value.quantity
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
  getItems(){
   
      let currentUser = {uid:'p31MWhJz18Qe5BU7sRMOE7F3jsB2'}// firebase.auth().currentUser;
 
    return  this.db.collection('mandaditosApp').doc(currentUser.uid).collection('Productos').snapshotChanges()
  
    
  
  }

}
