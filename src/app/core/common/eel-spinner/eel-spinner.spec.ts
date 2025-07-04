import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EelSpinner } from './eel-spinner';

describe('EelSpinner', () => {
  let component: EelSpinner;
  let fixture: ComponentFixture<EelSpinner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EelSpinner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EelSpinner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
