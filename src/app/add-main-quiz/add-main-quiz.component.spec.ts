import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainQuizComponent } from './add-main-quiz.component';

describe('AddMainQuizComponent', () => {
  let component: AddMainQuizComponent;
  let fixture: ComponentFixture<AddMainQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMainQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMainQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
