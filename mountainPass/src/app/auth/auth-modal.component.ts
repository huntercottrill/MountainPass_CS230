import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Authresponse } from '../auth/authResponse';

@Component({
    selector: 'auth-modal',
    templateUrl: './auth-modal.component.html'
  })

  export class authModal {
    constructor( private authService:AuthService) { }
  
    public buttonClicked!:string; 
      private authObservable!: Observable<Authresponse>; 
  
      public onSubmit(data: NgForm) {
          console.log("Button clicked = " + this.buttonClicked); 
          console.log(data.value); 
  
          if (this.buttonClicked == 'SignUp') {
              this.authObservable = this.authService.signup(data.value.email, data.value.password);
          }
          if (this.buttonClicked == 'Login') {
              this.authObservable = this.authService.login(data.value.email, data.value.password);
          }    
              
              
          this.authObservable.subscribe((data:Authresponse) =>
              {
                      console.log(data); 
              },
  
              error => {
                      console.log(error); 
              }
          ); 
  
          data.resetForm();
      }

  
  }
  
  
  