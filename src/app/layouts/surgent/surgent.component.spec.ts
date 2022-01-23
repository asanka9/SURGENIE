import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgentComponent } from './surgent.component';

describe('SurgentComponent', () => {
  let component: SurgentComponent;
  let fixture: ComponentFixture<SurgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
