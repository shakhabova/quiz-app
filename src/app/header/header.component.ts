import { Component } from '@angular/core';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
