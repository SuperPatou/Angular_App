import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public motDePasse: string = "";

  private readonly POST_LOGIN = environment.apiUrl + 'User/login'

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this
      .http
      .post(
        this.POST_LOGIN,
        {
          Email: this.email,
          Password: this.motDePasse
        }
      ).subscribe((token: any) => localStorage.setItem('access_token', token.accessToken));
  }
}
