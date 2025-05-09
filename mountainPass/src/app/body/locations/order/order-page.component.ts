import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderRestData } from './order-rest-data.model';

@Component({
  selector: 'order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})

export class OrderPageComponent {
  OrderData: OrderRestData | undefined;
  orders: OrderRestData[] = [];


  constructor(private http: HttpClient) {

  }

  public buttonClicked!: string;

  public onSubmit(data: NgForm) {
    console.log("Button clicked = " + this.buttonClicked);
    console.log(data.value);

    if (this.buttonClicked == 'Create Rest') {

    }
  }

  ngOnInit(): void {
    console.log("Getting Evansdale Rest. data");
    this.getOrderItems();
    this.showOrderData();

  }

  getOrderItems() {
    return this.http.get<OrderRestData[]>('https://mountainpass-2c2f1-default-rtdb.firebaseio.com/Orders/0/Items.json');
  }

  showOrderData() {
    this.getOrderItems().subscribe((data: OrderRestData[]) => {
      for (var restaurant in data) {
        this.OrderData = data[restaurant];    
        this.orders.push(new OrderRestData(data[restaurant]));
      }
      console.log(this.orders);
      
    })
  }



}