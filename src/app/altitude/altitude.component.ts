import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AltitudeService } from '../altitude.service';
import { Altitude } from '../models/altitude.model';

@Component({
  selector: 'app-altitude',
  templateUrl: './altitude.component.html',
  styleUrls: ['./altitude.component.scss']
})
export class AltitudeComponent implements OnInit {

  private readonly POST_LOGIN = environment.apiUrl + 'User/login'
  public allAltitude: Altitude[] = [];

  constructor(public altitudeService: AltitudeService) { }

  ngOnInit(): void { 

    this.altitudeService.getAllAltitudes()
    .subscribe((allAltitude) => {
      this.allAltitude = allAltitude
    })
  }
}
