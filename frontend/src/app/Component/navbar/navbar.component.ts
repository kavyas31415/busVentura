import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var google: any;
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Corrected property name to styleUrls
})
export class NavbarComponent implements OnInit, AfterViewInit {
  isloggedIn: boolean = false;

  constructor(private router: Router, private customerservice: CustomerService) {}

  ngOnInit(): void {
    this.isloggedIn = !!sessionStorage.getItem("Loggedinuser");

    google.accounts.id.initialize({
      client_id: "833407495-6et61c9c8vjirflj98jlfh182tqngdhu.apps.googleusercontent.com",
      callback: (response: any) => this.handlelogin(response)
    });
  }

  ngAfterViewInit(): void {
    this.rendergooglebutton();
  }

  private rendergooglebutton(): void {
    const googlebtn = document.getElementById('google-btn');
    if (googlebtn) {
      google.accounts.id.renderButton(googlebtn, {
        theme: 'outline',
        size: 'medium',
        shape: 'pill',
        width: 150,
      });
    }
  }

  private decodetoken(token: string): any {
    return JSON.parse(atob(token.split(".")[1]));
  }

  handlelogin(response: any): void {
    const payload = this.decodetoken(response.credential);
    console.log(payload);
    this.customerservice.addcustomermongo(payload).subscribe({
      next: (response) => {
        console.log('POST success', response);
        sessionStorage.setItem("Loggedinuser", JSON.stringify(response));
      },
      error: (error) => {
        console.error('Post request failed', error);
      }
    });
  }

  handlelogout(): void {
    google.accounts.id.disableAutoSelect();
    sessionStorage.removeItem('Loggedinuser');
    window.location.reload();
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  navigateToLandingPage(): void {
    this.router.navigate(['/']);  // Adjust the route as needed
  }

  
}
