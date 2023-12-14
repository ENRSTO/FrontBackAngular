import { Component, OnInit, OnChanges,Input, SimpleChanges} from '@angular/core';
import { DatiService } from '../dati.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-visualizzazione-dati',
  templateUrl: './visualizzazione-dati.component.html',
  styleUrls: ['./visualizzazione-dati.component.css']
})
export class VisualizzazioneDatiComponent implements OnInit {

  cities: string[];
  
  constructor(private datiService: DatiService) { 
    this.cities = [];
  }
  newCity = '';

  
  ngOnInit(){
    this.datiService.getCities().subscribe(data => {
      this.cities = data;
      console.log(this.cities);
    });
  }

  loadCities() {
    this.datiService.getCities().subscribe(data => {
      this.cities = data;
      console.log(this.cities);
    });
  }
  
  addCity(nuovaStringa: string) {
    this.datiService.addCity(this.newCity).subscribe(() => {
      console.log('Città aggiunta con successo');
      this.loadCities();  // Ricarica la lista dopo l'aggiunta della città
    });
  }
   
  
  /*
  ngOnChanges(agg: SimpleChanges) {
    // Implementa il codice necessario quando ci sono modifiche alle proprietà di input
    if (this.agg === true) {
      this.update();
    }
  }*/

  /*
  inviaDatiBackEnd(){
      console.log("ci passo");
      this.datiService.inviaDatiBackEnd(this.nuovaStringa).subscribe(
        response => {
          console.log('Success:', response);         
        },
        error => {
          console.error('Error:', error);
        }
      );   
  }      */
      
      
  
   /*
  update():void {
    if (this.agg){
      this.datiService.ottieniDatiAgg().pipe(
        tap((dati: string[]) => this.datiFiltrati = dati)    
      ).subscribe();

    }
   
  }*/


}
