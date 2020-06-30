import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  @ViewChild('password', { static: false })
  private passwd: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(mail: string, ev: any) {
    console.log("test:", mail, this.passwd.nativeElement.value);
    console.log(ev);
  }

}
