import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public value?: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.value = this.activatedRoute.snapshot.queryParamMap.get('result') || '0';
  }
}
