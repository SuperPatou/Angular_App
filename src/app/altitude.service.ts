import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Altitude } from './models/altitude.model';


@Injectable({
  providedIn: 'root'
})
export class AltitudeService {
  private readonly GET_ALTITUDES = environment.apiUrl + 'Altitude/getAltitudes/';
  constructor(private http: HttpClient) { }

  getAllAltitudes(): Observable<Altitude[]>{
    return this.http
    .get<Altitude[]>(this.GET_ALTITUDES).pipe(
      tap(data =>
      console.log('All: ' + JSON.stringify(data)))
    );
  }
}
