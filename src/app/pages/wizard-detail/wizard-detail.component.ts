import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WizardDataService } from '../../services/wizard-data.service';
import { AdviceService } from '../../services/advice.service';
import { WizardHousePipe } from '../../pipes/wizard-house.pipe';
import { VegaComponentModule } from '@heartlandone/vega-angular';

@Component({
  selector: 'app-wizard-detail',
  standalone: true,
  imports: [
    CommonModule,
    WizardHousePipe,
    VegaComponentModule
  ],
  providers: [
    WizardDataService,
    AdviceService
  ],
  templateUrl: './wizard-detail.component.html',
  styleUrl: './wizard-detail.component.css'
})

export class WizardDetailComponent implements OnInit {
  wizard: any;
  advice: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private wizardDataService: WizardDataService,
    private adviceService: AdviceService
  ) {}

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.wizardDataService.getWizardById(id).subscribe((data) => {
      this.wizard = data;
    });

    this.fetchAdvice();
  }

  fetchAdvice(): void {
    this.adviceService.getRandomAdvice().subscribe(
      (response) => {
        this.advice = response.slip?.advice || 'No advice';
      },
      (error) => {
        console.log('Error fetching advice:', error);
        this.advice = 'Failed to load advice';
      }
    );
  }
}
