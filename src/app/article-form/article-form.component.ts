import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  public titre: string ="";
  public auteur: string ="";
  public texte: string ="";
  public selectedBlog: Blog = new Blog();

  public allBlogs: Blog[] = [];

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllBlogs()
    .subscribe((blogs: Blog[]) => {
      this.allBlogs = blogs
    })
  }

  submitArticle(){
    this.blogService.addArticle({
      titre: this.titre,
      auteur: this.auteur,
      texte: this.texte,
      blog: this.selectedBlog
    });

    this.blogService.getAllBlogs()
    .subscribe((blogs: Blog[]) => {
      this.allBlogs = blogs
    })
  }
}