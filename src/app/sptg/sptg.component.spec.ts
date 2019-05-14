import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SptgComponent } from './sptg.component';

describe('SptgComponent', () => {
  let component: SptgComponent;
  let fixture: ComponentFixture<SptgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SptgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SptgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
