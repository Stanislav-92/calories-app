import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UiService } from 'src/app/shared/ui.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  mismatch: boolean;
  ages = ['< 18', '18-25', '26-35', '36-45', '46-65', '> 65'];

  constructor(private fb: FormBuilder, private uiService: UiService, private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      verifyPassword: [null, [Validators.required]],
      age: [null]
    });
  }

  onSignup() {
    if (this.signupForm.valid) {
      if (this.signupForm.value.password === this.signupForm.value.verifyPassword) {
        this.authService.signup({
          email: this.signupForm.value.email,
          password: this.signupForm.value.password,
          firstname: this.signupForm.value.firstname,
          lastname: this.signupForm.value.lastname,
          age: this.signupForm.value.age
        });
      } else {
        this.uiService.openSnackbar('The passwords don\'t match.', 'Close', 3000);
      }
    } else {
      this.uiService.openSnackbar('The form is invalid. Make sure all fields are filled properly.', 'Close', 3000);
    }
  }

}
