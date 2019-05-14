import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsfddbrbgdjsqComponent } from './gsfddbrbgdjsq.component';

describe('GsfddbrbgdjsqComponent', () => {
  let component: GsfddbrbgdjsqComponent;
  let fixture: ComponentFixture<GsfddbrbgdjsqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsfddbrbgdjsqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsfddbrbgdjsqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
