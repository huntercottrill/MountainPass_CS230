import { Component } from "@angular/core";
import { OrderRestData } from './order-rest-data.model';
import { AppComponent } from "src/app/app.component";

@Component({
    selector: 'submit-order',
    templateUrl: './submit-order.component.html'
})

export class SubmitOrderComponent{
    OrderData: OrderRestData | undefined;
    orders: OrderRestData[] = [];
  
}