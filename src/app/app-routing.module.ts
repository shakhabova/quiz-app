import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { TestsListComponent } from './tests-list/tests-list.component';

const routes: Routes = [
  { path: '', component: TestsListComponent},
  { path: 'questions/:testId', component: QuestionsListComponent },
  { path: 'results/:testResultsId', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
