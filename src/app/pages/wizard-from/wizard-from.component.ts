import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { noNumbersValidator } from '../../validators/wizard-name.validator';

@Component({
  selector: 'app-wizard-from',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './wizard-from.component.html',
  styleUrl: './wizard-from.component.css'
})
export class WizardFromComponent {
  wizardForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.wizardForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), noNumbersValidator()]],
      lastName: ['', [Validators.required, Validators.minLength(2), noNumbersValidator()]],
      age: ['', [Validators.required, Validators.min(21), Validators.max(100)]],
      house: [''],
      skills: ['']
    });
  }

  onSubmit() {
    if (this.wizardForm.valid) {
      this.router.navigate(['/wizard-info'], { state: { wizardData: this.wizardForm.value } });
    } else {
      console.log('Form data is not valid');
      alert('Please fill out the form correctly.');
    }
  }
}
