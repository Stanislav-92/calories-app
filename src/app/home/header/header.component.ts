import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/shared/ui.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  setActive: boolean;
  isAuthenticated: boolean;
  highlightSub: Subscription;
  authSub: Subscription;

  constructor(private router: Router, private uiService: UiService, private authService: AuthService) { }

  ngOnInit() {
    this.highlightSub = this.uiService.highlightIcon
      .subscribe(highlightStatus => this.setActive = highlightStatus);
    this.authSub = this.authService.authChange
      .subscribe(authStatus => this.isAuthenticated = authStatus);
  }

  onGoToPrimary() {
    this.router.navigate(['/']);
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.highlightSub.unsubscribe();
  }

}
