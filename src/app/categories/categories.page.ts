import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  cart = [];
  items = [];
 
  constructor(private cartService: CartService , private router : Router) { }
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  ngOnInit() {
   this.items = this.cartService.getProducts();
   // this.items = this.cartService.getCategories();
    this.cart = this.cartService.getCart();
  }
  showSomething(id){
this.router.navigate(['product-list'])
  }
}
