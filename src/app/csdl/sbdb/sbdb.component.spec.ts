import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbdbComponent } from './sbdb.component';

describe('SbdbComponent', () => {
  let component: SbdbComponent;
  let fixture: ComponentFixture<SbdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
