import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { LoginData } from './models/login-data.model';
import { SignupData } from './models/signup-data.model';
import { UiService } from '../shared/ui.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isAuth = false;
  authChange = new Subject<boolean>();

  constructor(
    private db: AngularFirestore,
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private uiService: UiService
    ) { }

  initializeAppAuth() {
    this.firebaseAuth.authState
      .subscribe(user => {
        if (user) {
          this.loginOrSignupUser();
        } else {
          this.isAuth = false;
          this.authChange.next(false);
          this.router.navigate(['/login']);
        }
      });
  }

  login(userData: LoginData) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(userData.email, userData.password)
      .then(res => {

      })
      .catch(err => {
        this.uiService.openSnackbar(err.message, 'Close', 3000);
      });
  }

  signup(userData: SignupData) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(userData.email, userData.password)
      .then(res => {

      })
      .catch(err => {
        this.uiService.openSnackbar(err.message, 'Close', 3000);
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

  isAuthenticated() {
    return this.isAuth;
  }

  loginOrSignupUser() {
    this.isAuth = true;
    this.authChange.next(true);
    this.router.navigate(['/']);
  }

}
