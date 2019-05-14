import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GszsbgdjsqComponent } from './gszsbgdjsq.component';

describe('GszsbgdjsqComponent', () => {
  let component: GszsbgdjsqComponent;
  let fixture: ComponentFixture<GszsbgdjsqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GszsbgdjsqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GszsbgdjsqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
