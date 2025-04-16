import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./body/home/home-page.component";
import { EvansdaleComponent } from "./body/locations/evansdale.component";
import { HealthSciencesComponent } from "./body/locations/hsc.component";
import { MountainlairComponent } from "./body/locations/mtnlair.component";
import { OrderPageComponent } from "./body/locations/order/order-page.component";

const routes: Routes = [
    { path: 'order', component: OrderPageComponent },
    { path: 'restaurants/evansdale', component: EvansdaleComponent },
    { path: 'restaurants/mountainlair', component: MountainlairComponent },
    { path: 'restaurants/healthsciences', component: HealthSciencesComponent },
    { path: '', pathMatch: 'full', component: HomePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
  
export class AppRoutingModule {}  