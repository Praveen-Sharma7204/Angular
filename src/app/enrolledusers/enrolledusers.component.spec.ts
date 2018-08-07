import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledusersComponent } from './enrolledusers.component';

describe('EnrolledusersComponent', () => {
  let component: EnrolledusersComponent;
  let fixture: ComponentFixture<EnrolledusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolledusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
