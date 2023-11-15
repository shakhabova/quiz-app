import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatRadioModule} from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionComponent } from './question/question.component';
import {MatButtonModule} from '@angular/material/button';
import { ResultsComponent } from './results/results.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TestsListComponent } from './tests-list/tests-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ResultsComponent,
    QuestionsListComponent,
    TestsListComponent,
    HeaderComponent,
    SearchDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
