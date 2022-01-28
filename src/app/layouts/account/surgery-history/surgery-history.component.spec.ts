import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeryHistoryComponent } from './surgery-history.component';

describe('SurgeryHistoryComponent', () => {
  let component: SurgeryHistoryComponent;
  let fixture: ComponentFixture<SurgeryHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurgeryHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeryHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
