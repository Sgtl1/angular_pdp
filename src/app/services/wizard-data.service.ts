  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Wizard} from '../interfaces/wizard.interface';

@Injectable({
  providedIn: 'root'
})
export class WizardDataService {
  // TODO: add InjectionToken
  //InjectionToken: InjectionToken<string>
  private apiUrl = 'https://wizard-world-api.herokuapp.com'

  constructor(private http: HttpClient) {}

  getWizards(): Observable<Wizard[]>{
    return this.http.get<any[]>(`${this.apiUrl}/Wizards`)
  }

  getWizardById(id:string):Observable<unknown>{
      return this.http.get<Wizard>(`${this.apiUrl}/Wizards/${id}`)
  }
}
