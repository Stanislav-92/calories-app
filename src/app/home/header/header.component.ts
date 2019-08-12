import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/shared/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  setActive: boolean;
  highlightSub: Subscription;

  constructor(private router: Router, private uiService: UiService) { }

  ngOnInit() {
    this.highlightSub = this.uiService.highlightIcon
      .subscribe(highlightStatus => this.setActive = highlightStatus);
  }

  onGoToPrimary() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.highlightSub.unsubscribe();
  }

}
