import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { LandingPageComponent } from './Component/landing-page/landing-page.component';
import { DialogComponent } from './Component/landing-page/dialog/dialog.component';
import { SelectbusPageComponent } from './Component/selectbus-page/selectbus-page.component';
import { HeaderComponent } from './Component/selectbus-page/header/header.component';
import { LeftComponent } from './Component/selectbus-page/left/left.component';
import { RightComponent } from './Component/selectbus-page/right/right.component';
import { SortingBarComponent } from './Component/selectbus-page/right/sorting-bar/sorting-bar.component';
import { BusBoxComponent } from './Component/selectbus-page/right/bus-box/bus-box.component';
import { BottomTabComponent } from './Component/selectbus-page/right/bus-book/bottom-tab/bottom-tab.component';
import { ViewSeatsComponent } from './Component/selectbus-page/right/view-seats/view-seats.component';
import { FormDrawerComponent } from './Component/selectbus-page/right/form-drawer/form-drawer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { SmallSeatsComponent } from './Component/selectbus-page/right/small-seats/small-seats.component';
import { BusBookingFormComponent } from './Component/selectbus-page/right/bus-booking-form/bus-booking-form.component';
import { PaymentPageComponent } from './Component/payment-page/payment-page.component';
import { ProfilePageComponent } from './Component/profile-page/profile-page.component';
import { MyTripComponent } from './Component/profile-page/my-trip/my-trip.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { VirtualComponent } from './Component/virtual/virtual.component';
import { CommunityComponent } from './Component/community/community.component';
import { TravelComponent } from './Component/community/travel/travel.component';
import { TipsComponent } from './Component/community/tips/tips.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { StoriesComponent } from './Component/community/stories/stories.component';
import { GalleriaModule } from 'primeng/galleria';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewsComponent } from './Component/community/reviews/reviews.component';
import { BusHireComponent } from './Component/bus-hire/bus-hire.component';
import { DlogComponent } from './Component/bus-hire/dlog/dlog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SuccessComponent } from './Component/bus-hire/success/success.component';






@NgModule({ declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LandingPageComponent,
        DialogComponent,
        SelectbusPageComponent,
        HeaderComponent,
        LeftComponent,
        RightComponent,
        SortingBarComponent,
        BusBoxComponent,
        BottomTabComponent,
        ViewSeatsComponent,
        FormDrawerComponent,
        SmallSeatsComponent,
        BusBookingFormComponent,
        PaymentPageComponent,
        ProfilePageComponent,
        MyTripComponent,
        VirtualComponent,
        CommunityComponent,
        TravelComponent,
        TipsComponent,
        StoriesComponent,
        ReviewsComponent,
        BusHireComponent,
        DlogComponent,
        SuccessComponent,
       
        
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatMenuModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatTableModule,
        MatIconModule,
        MatSidenavModule,
        MatDividerModule,
        CommonModule,
        CarouselModule,
        GalleriaModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
        
     
            

    
    ], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
