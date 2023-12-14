import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class DatiService {

  private apiUrlOut = 'http://localhost:8080/out';
  private apiUrlIn = 'http://localhost:8080/in';
 
 // nuovaStringa: string = '';
 // private datiSubject = new BehaviorSubject<string[]>([]);
 // dati$ = this.datiSubject.asObservable();
  
  constructor(private http: HttpClient) { }


  getCities(): Observable<string[]> {
    const url =  this.apiUrlOut;
    return this.http.get<string[]>(url);
  }

  addCity(nuova: string): Observable<void> {
    const url = this.apiUrlIn;
    const body = {"nuovaStringa": nuova};
    return this.http.post<void>(url, body);

  }

}
