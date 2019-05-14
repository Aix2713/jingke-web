import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DljzComponent } from './dljz.component';

describe('DljzComponent', () => {
  let component: DljzComponent;
  let fixture: ComponentFixture<DljzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DljzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DljzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
