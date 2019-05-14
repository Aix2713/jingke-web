import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GszxlcComponent } from './gszxlc.component';

describe('GszxlcComponent', () => {
  let component: GszxlcComponent;
  let fixture: ComponentFixture<GszxlcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GszxlcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GszxlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
