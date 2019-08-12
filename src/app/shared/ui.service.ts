import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UiService {
  highlightIcon = new Subject<boolean>();

  constructor() { }
}
