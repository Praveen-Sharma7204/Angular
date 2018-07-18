import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIntroComponent } from './all-intro.component';

describe('AllIntroComponent', () => {
  let component: AllIntroComponent;
  let fixture: ComponentFixture<AllIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
