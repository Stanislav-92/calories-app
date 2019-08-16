import { Component, OnInit, OnDestroy } from '@angular/core';
import { UiService } from 'src/app/shared/ui.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean;
  authSub: Subscription;

  constructor(private uiService: UiService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.uiService.highlightIcon.next(true);
    this.authSub = this.authService.authChange
    .subscribe(authStatus => this.isAuthenticated = authStatus);
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  goToCalories() {
    this.router.navigate(['/calories']);
  }

  ngOnDestroy() {
    this.uiService.highlightIcon.next(false);
    this.authSub.unsubscribe();
  }

}
