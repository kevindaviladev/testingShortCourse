import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toBe('Question test!');

    //Comprobar el HTML
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('Question test!');
  });

  it('should have sad face on No button', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('.btn-no');
    expect(btn.innerHTML).toContain(':(');
  });

  it('should be disable the button on Mark response', () => {
    component.markResponse(true);
    expect(component.disableButtons).toBe(true);
  });
});
