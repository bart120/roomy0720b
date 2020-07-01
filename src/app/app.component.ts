import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Roomy';
  user: UserModel = null;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    //this.user = JSON.parse(sessionStorage.getItem('USER'));
    this.auth.user.subscribe(
      data => {
        this.user = data;
      }
    );

  }
}
