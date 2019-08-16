import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})

export class UiService {
  highlightIcon = new Subject<boolean>();

  constructor(private snackBar: MatSnackBar) { }

  openSnackbar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, { duration });
  }

}
