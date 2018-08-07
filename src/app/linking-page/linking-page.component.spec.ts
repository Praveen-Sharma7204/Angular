import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkingPageComponent } from './linking-page.component';

describe('LinkingPageComponent', () => {
  let component: LinkingPageComponent;
  let fixture: ComponentFixture<LinkingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
