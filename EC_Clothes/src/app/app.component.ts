import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EC_Clothes';
  loggedIn = false;
  currentUser: any;


  constructor(private auth: AuthService) { 
    this.loggedIn = this.auth.isAuthentication();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
  }

  public logout(){
    this.auth.logoutUser();
    window.location.reload();
  }
}
