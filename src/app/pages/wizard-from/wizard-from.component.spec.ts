import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardFromComponent } from './wizard-from.component';

describe('WizardFromComponent', () => {
  let component: WizardFromComponent;
  let fixture: ComponentFixture<WizardFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizardFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
