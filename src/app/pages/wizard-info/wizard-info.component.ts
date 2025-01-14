import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wizard-info',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './wizard-info.component.html',
  styleUrl: './wizard-info.component.css'
})
export class WizardInfoComponent {
  wizardData: any;

  constructor(protected router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.wizardData = navigation?.extras.state?.['wizardData'];
  }
}
