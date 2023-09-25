import { Component } from '@angular/core';
import { Question } from '../Question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.css'],
})
export class TestsListComponent {
  constructor(private router: Router) {}

  public startTest() {
    this.router.navigate(['questions']);
  }
}
