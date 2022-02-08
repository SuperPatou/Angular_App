import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  public nom: string = "";
  public prenom: string = "";
  public email: string = "";
  public motDePasse: string = "";

  private readonly GET_BLOGS = environment.apiUrl + 'Blog/getBlogs/';
  private readonly POST_SUBSCRIBE = environment.apiUrl + 'User/subscribe'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.http.post(
      this.POST_SUBSCRIBE,{
        user: new User(
          this.nom,
          this.prenom,
          this.email
        ), Password: this.motDePasse
      }
    ).subscribe()
  }
}
