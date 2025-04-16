import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-cards',
  templateUrl: './restaurant-cards.component.html',
})
export class RestaurantCardsComponent {
  constructor(private router: Router) { }

  navigateToOrder() {
    this.router.navigate(['order'])
  }
}