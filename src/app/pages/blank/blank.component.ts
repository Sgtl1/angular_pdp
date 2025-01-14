import { Component, OnInit } from '@angular/core';
import { WizardDataService } from '../../services/wizard-data.service';
import { Observable } from 'rxjs';
import { VegaComponentModule } from '@heartlandone/vega-angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {Wizard} from '../../interfaces/wizard.interface';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [
    CommonModule,
    VegaComponentModule,
    RouterModule
  ],
  providers: [ WizardDataService ],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.css'
})
export class BlankComponent implements OnInit {
  wizards$: Observable<Wizard[]> | undefined;

  constructor(private wizardDataService: WizardDataService) {}

  ngOnInit(): void {
    this.wizards$ = this.wizardDataService.getWizards()
  }
}
