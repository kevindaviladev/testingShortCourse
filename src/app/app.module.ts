import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { GithubUserComponent } from './github-user/github-user.component';

@NgModule({
  declarations: [AppComponent, QuestionComponent, GithubUserComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
