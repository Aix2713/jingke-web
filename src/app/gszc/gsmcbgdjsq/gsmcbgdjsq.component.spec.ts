import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsmcbgdjsqComponent } from './gsmcbgdjsq.component';

describe('GsmcbgdjsqComponent', () => {
  let component: GsmcbgdjsqComponent;
  let fixture: ComponentFixture<GsmcbgdjsqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsmcbgdjsqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsmcbgdjsqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
