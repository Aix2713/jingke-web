import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GszcComponent } from './gszc.component';

describe('GszcComponent', () => {
  let component: GszcComponent;
  let fixture: ComponentFixture<GszcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GszcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GszcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
