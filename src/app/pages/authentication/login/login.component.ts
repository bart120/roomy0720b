import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  @ViewChild('password', { static: false })
  private passwd: ElementRef;

  user: any = null;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    //this.user = JSON.parse(sessionStorage.getItem('USER'));
    this.auth.user.subscribe(
      data => this.user = data
    );
  }

  onLogin(mail: string, ev: any) {
    console.log("test:", mail, this.passwd.nativeElement.value);
    console.log(ev);

    //this.user = { login: mail, name: mail };
    //sessionStorage.setItem('USER', JSON.stringify(this.user));
    this.auth.login(mail, this.passwd.nativeElement.value);
  }

  onLogout() {
    this.user = null;
    //sessionStorage.removeItem('USER');
    this.auth.logout();
  }

}
