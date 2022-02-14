import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  title = 'Question test!';
  disableButtons = false;
  response: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  markResponse(response: boolean) {
    this.response = response;
    this.disableButtons = true;
  }
}
