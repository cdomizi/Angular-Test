import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  @ViewChild('cartItems') cartItems!: ElementRef;

  incrementCount(): any {
    // let counter: number = this.cartItems.nativeElement.innerText;
    // counter ++;
    console.warn();
  }

  ngOnInit(): void {
  }

}
