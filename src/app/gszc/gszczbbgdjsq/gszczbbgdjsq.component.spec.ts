import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GszczbbgdjsqComponent } from './gszczbbgdjsq.component';

describe('GszczbbgdjsqComponent', () => {
  let component: GszczbbgdjsqComponent;
  let fixture: ComponentFixture<GszczbbgdjsqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GszczbbgdjsqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GszczbbgdjsqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
