import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Advice} from '../interfaces/advice.interface';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {
  private apiUrl = 'https://api.adviceslip.com/advice';

  constructor(private http: HttpClient) { }

  getRandomAdvice(): Observable<Advice>{
    return this.http.get<any>(this.apiUrl);
  }
}
