import { HttpClient } from "@angular/common/http";
import { Component, Injectable, Input, OnInit } from "@angular/core";
import { RestData } from "../rest-data.model";
import { Router } from "@angular/router";

@Injectable()
@Component({
        selector: "ED-Cards",
        templateUrl:"ED-Rest-Cards.component.html",
        styleUrls: ['../restaurant-cards.component.css']
})

export class EDCardComponent {
        RestaurantData: RestData | undefined; 
        constructor(private http:HttpClient , private router: Router){

        }

        @Input()
        Name! : string; 
        @Input()
        Description! : string; 
        @Input()
        imagePath! : string; 

        navigateToOrder() {
                this.router.navigate(['order'])
        }
}