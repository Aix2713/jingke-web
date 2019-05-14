import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GszclcComponent } from './gszclc.component';

describe('GszclcComponent', () => {
  let component: GszclcComponent;
  let fixture: ComponentFixture<GszclcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GszclcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GszclcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
