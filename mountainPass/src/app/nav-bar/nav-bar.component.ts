import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Authresponse } from '../auth/authResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  /*Creates instances of Router and AuthService*/
  constructor(private router: Router, private authService: AuthService) { }

  /*Type of button clicked: SignUp or Login*/
  public buttonClicked!: string;
  private authObservable!: Observable<Authresponse>;

  /*When button on modal is clicked, takes information typed in the form*/
  public onSubmit(data: NgForm) {
    console.log("Button clicked = " + this.buttonClicked);
    console.log(data.value);

    /*If signup button is clicked, input email and password entered into the signup method from authService
    * to send to the database
    */
    if (this.buttonClicked == 'SignUp') {
      this.authObservable = this.authService.signup(data.value.email, data.value.password);
    }
    /*If login button is clicked, input email and password entered into the login method from authService
    * to validate in the database
    */
    if (this.buttonClicked == 'Login') {
      this.authObservable = this.authService.login(data.value.email, data.value.password);
    }


    this.authObservable.subscribe((data: Authresponse) => {
      console.log(data);
    },

      error => {
        console.log(error);
      }
    );

    data.resetForm();
  }
  /*Routes to the Home page*/
  navigateToHome() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.navigateToHome();
  }


}


