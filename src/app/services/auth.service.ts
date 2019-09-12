import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo : any

constructor(public AFauth :AngularFireAuth,public router : Router, private db : AngularFirestore) {

 }

    login( email : string, password : string){
     return new Promise((resolve,rejected)=>{
    this.AFauth.auth.signInWithEmailAndPassword(email,password).then(  user =>{
resolve(user)

  }).catch(error => rejected(error));

});

  }


  logout(){
    this.AFauth.auth.signOut().then(()=>{
    
      this.router.navigate(['/login']);
    })
   
  }


  registerBusiness(email : string, password : string, name : string, address :string,category:string,lat :number, lng:number){
    return new Promise ((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then( res =>{
        const uid = res.user.uid;
          this.db.collection('mandaditosApp').doc(uid).set({
            category:category,
            businessName : name,
            email : email,
            password : password,
            address : address,
            lat:lat,
            lng:lng,
            billingRecord : '',
            uid : uid,
            isActive: false
            
          })
        
        resolve(res)
      }).catch( err => reject(err))
    })
    

  }

}
