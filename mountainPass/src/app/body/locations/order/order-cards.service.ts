import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class OrderedCardService {

    private baseUrl: string = "https://mountainpass-2c2f1-default-rtdb.firebaseio.com/";
    private resturantEndpoint = "Restaurants.json";
    private ChickFilAEndpoint = "Chick-Fil-A/menu.json";
    constructor(private http: HttpClient){

    }

    

}