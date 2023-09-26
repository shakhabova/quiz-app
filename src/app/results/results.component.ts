import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  public value!: number;
  public rightAnswersCount!: number;
  public questionsLength!: number;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.rightAnswersCount = +(
      this.activatedRoute.snapshot.queryParamMap.get('rightAnswersCount') || 0
    );
    this.questionsLength = +(
      this.activatedRoute.snapshot.queryParamMap.get('questionsLength') || 0
    );
    this.value = (this.rightAnswersCount / this.questionsLength) * 100;
  }
}
