import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockLoadingComponent } from './clock-loading.component';

describe('ClockLoadingComponent', () => {
  let component: ClockLoadingComponent;
  let fixture: ComponentFixture<ClockLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
