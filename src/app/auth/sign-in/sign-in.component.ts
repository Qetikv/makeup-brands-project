import { Component, OnInit } from '@angular/core';

export interface SignInForm {
  email: String,
  password: String
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  signIn({email, password }: SignInForm) {
     if(!email || !password) {
       return;
     }
  }

}
