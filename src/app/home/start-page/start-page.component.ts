import { Component, OnInit, OnDestroy } from '@angular/core';
import { UiService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit, OnDestroy {

  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.uiService.highlightIcon.next(true);
  }

  ngOnDestroy() {
    this.uiService.highlightIcon.next(false);
  }

}
