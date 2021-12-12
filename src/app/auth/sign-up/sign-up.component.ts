import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { mustMatch } from 'src/app/shared/utils/validators.fn';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})

export class SignUpComponent implements OnInit {
  hide = true;

  constructor() {}

  ngOnInit() {
  }

  signUp(form: NgForm) {
    if(form.invalid) {
      return;
    }
  }
}
