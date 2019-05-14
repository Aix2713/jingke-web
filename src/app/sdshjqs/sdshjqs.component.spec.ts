import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdshjqsComponent } from './sdshjqs.component';

describe('SdshjqsComponent', () => {
  let component: SdshjqsComponent;
  let fixture: ComponentFixture<SdshjqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdshjqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdshjqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
