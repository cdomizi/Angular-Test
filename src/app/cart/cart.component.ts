import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cookieValue: string | null = null;

  constructor(private cookieService: CookieService) {
    this.cookieService.set(
      'CartCounter',
      this.cookieValue = this.cookieValue ?? '0',
      { expires: new Date(new Date().getTime() +  1000 * 60 * 30),
        path: '/',
        secure: true
      });
    this.cookieValue = this.cookieService.get('CartCounter');
  }

  @ViewChild('cartItems') cartItems!: ElementRef;

  incrementCount(): any {
    let counter: any = this.cookieValue;
    counter = parseInt(counter);
    counter++;
    this.cookieValue = counter.toString();
    this.cookieService.set(
      'CartCounter',
      counter,
      { expires: new Date(new Date().getTime() +  1000 * 60 * 30),
        path: '/',
        secure: true
      });
  }

  ngOnInit() {
  }

}
