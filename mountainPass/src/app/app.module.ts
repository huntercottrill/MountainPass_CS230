import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RestaurantCardsComponent } from './restaurant-cards/restaurant-cards.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './body/title.component';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user-card/user-card.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from './body/user-info.component';
import { AppRoutingModule } from './app-routing.module';
import { EvansdaleComponent } from './body/locations/evansdale.component';
import { HealthSciencesComponent } from './body/locations/hsc.component';
import { MountainlairComponent } from './body/locations/mtnlair.component';
import { OrderPageComponent } from './body/locations/order/order-page.component';
import { HomePageComponent } from './body/home/home-page.component';
import { CarouselComponent } from './body/home/carousel.component';
import { authModal } from './auth/auth-modal.component';
import { SubmitOrderComponent } from './body/locations/order/sumbit-order.component';
import { MTNCardComponent } from './restaurant-cards/Mtn/Mtn-Rest-Cards.component';
import { HSCCardComponent } from './restaurant-cards/Hsc/Hsc-Rest-Cards.component';
import { EDCardComponent } from './restaurant-cards/Evansdale/ED-Rest-Cards.component';
import { OrderCardsComponent } from './body/locations/order/order-cards.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    RestaurantCardsComponent,
    FooterComponent,
    TitleComponent,
    HeaderComponent,
    UserCardComponent,
    UserInfoComponent,
    EvansdaleComponent,
    HealthSciencesComponent,
    MountainlairComponent,
    HomePageComponent,
    CarouselComponent,
    authModal,
    SubmitOrderComponent,
    MTNCardComponent,
    HSCCardComponent,
    EDCardComponent,
    OrderPageComponent,
    OrderCardsComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
