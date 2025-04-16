import { HttpClient } from '@angular/common/http';
import { Component, Pipe } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestData } from '../../restaurant-cards/rest-data.model';



@Component({
  selector: 'evansdale',
  templateUrl: './evansdale.component.html',
  styleUrls: ['./evansdale.component.css']
})


export class EvansdaleComponent {
  RestaurantData: RestData | undefined; 
  restaurants:RestData[] = []; 
  

  constructor(private http:HttpClient , private router: Router){
    
  }

  public buttonClicked!: string;

  public onSubmit(data: NgForm) {
    console.log("Button clicked = " + this.buttonClicked); 
    console.log(data.value); 

    if (this.buttonClicked == 'Create Rest') {
        
    }
  }

  ngOnInit() : void {
    console.log("Getting Evansdale Rest. data");
    this.getRestData();
    this.showRestTitle(); 
    this.AddRestData(); 
                
  }

  getRestData() {
    return this.http.get<RestData []>('https://mountainpass-2c2f1-default-rtdb.firebaseio.com/Evansdale.json');
  }

  showRestTitle() {
      this.getRestData().subscribe((data: RestData []) => {
      for (var item in data){
        this.RestaurantData = data[item]; 
        this.restaurants.push(new RestData(data[item])); 
      }
      console.log(this.restaurants);
      })
  }

  AddRestData() {
    var temp: RestData = {
        Name: "Phi-lo-dohs", 
        Description: "Best burnt Food in Mo-town",
        imagePath: "N/A"
    }
    console.log(temp)
    return this.http.post<RestData>('https://mountainpass-2c2f1-default-rtdb.firebaseio.com/Evansdale.json' , temp); 
  }
}