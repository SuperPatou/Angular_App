import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../models/blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  public titre: string ="";
  public sousTitre: string ="";
  public categorie: string ="";
  public id: number = 0;

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
    
  }

  submitBlog(){
    this.blogService.addBlog({
      titre: this.titre,
      sousTitre: this.sousTitre,
      categorie: this.categorie
    });
  }
}