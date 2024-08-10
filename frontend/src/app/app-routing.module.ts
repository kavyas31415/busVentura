import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Component/landing-page/landing-page.component';
import { SelectbusPageComponent } from './Component/selectbus-page/selectbus-page.component';
import { PaymentPageComponent } from './Component/payment-page/payment-page.component';
import { ProfilePageComponent } from './Component/profile-page/profile-page.component';
import { VirtualComponent } from './Component/virtual/virtual.component';
import { CommunityComponent } from './Component/community/community.component';
import { BusHireComponent } from './Component/bus-hire/bus-hire.component';

const routes: Routes = [
  {path: '',component:LandingPageComponent},
  {path: 'select-bus',component:SelectbusPageComponent},
  {path: 'payment',component:PaymentPageComponent},
  {path: 'profile' ,component:ProfilePageComponent},
  {path: 'virtual' ,component:VirtualComponent},
  {path: 'community',component:CommunityComponent},
  {path: 'hire' ,component:BusHireComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
