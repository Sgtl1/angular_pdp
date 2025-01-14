import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { BlankComponent } from './pages/blank/blank.component';
import { WizardDetailComponent } from './pages/wizard-detail/wizard-detail.component';
import { wizardAccessGuard } from './guards/wizard-access.guard';
import { WizardFromComponent } from './pages/wizard-from/wizard-from.component';
import { WizardInfoComponent } from './pages/wizard-info/wizard-info.component';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'blank', component: BlankComponent },
  {
    path: 'wizards/:id',
    component: WizardDetailComponent,
    canActivate: [ wizardAccessGuard ],
  },
  { path: 'wizards/:id', component: WizardDetailComponent },
  { path: 'create-wizard', component: WizardFromComponent },
  { path: 'wizard-info', component: WizardInfoComponent },
];
