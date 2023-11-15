import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.css']
})
export class SearchDialogComponent {
  public formGroup = new FormGroup({
    'name': new FormControl(''),
    'category': new FormControl(''),
    'testsSize': new FormControl(10),
  });

  constructor(private questionService: QuestionsService) {}

  onSearch() {
    // this.questionService.searchTests(this.formGroup.value)
    //   .subscribe(result => {
    //     if (!result || result.length == 0) {
    //       // TODO result is empty
    //       return;
    //     }
    //   })
  }
}
