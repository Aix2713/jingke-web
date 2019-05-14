import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YzfwComponent } from './yzfw.component';

describe('YzfwComponent', () => {
  let component: YzfwComponent;
  let fixture: ComponentFixture<YzfwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YzfwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YzfwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
