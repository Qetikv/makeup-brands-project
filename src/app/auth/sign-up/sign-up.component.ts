import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { mustMatch } from 'src/app/shared/utils/validators.fn';

export interface SignUpForm {
  email: string,
  password: string
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})

export class SignUpComponent implements OnInit {
  hide = true;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
  }

  signUp(form: NgForm) {
    if(form.invalid) {
      return;
    }

   this.auth.signUp(form.value).then(() => this.router.navigate(['content']))

  }


}
