import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_App';

  private readonly GET_LOGOUT = environment.apiUrl + 'User/logout';
  
  constructor(private http: HttpClient) {}

  logout(){
    localStorage.removeItem('access_token');

    this.http.get(this.GET_LOGOUT).subscribe();
  }
}