import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blog-edit-form',
  templateUrl: './blog-edit-form.component.html',
  styleUrls: ['./blog-edit-form.component.scss']
})
export class BlogEditFormComponent implements OnInit {
  public titre: string ="";
  public sousTitre: string ="";
  public categorie: string ="";
  public id: number = 0;
  public submitState: boolean = true;

  public selectedBlog: Blog = new Blog();
  public allBlogs: Blog[] = [];
  
  constructor(
    public blogService: BlogService,
    public activatedRoute: ActivatedRoute
    ) { }
    
  ngOnInit(): void {
    this.blogService.getAllBlogs()
    .subscribe((blogs: Blog[]) => {
      this.allBlogs = blogs
    });
  }

  
  onChangeBlog() {
    console.log(this.selectedBlog);
    this.submitState = false;
    
    this.activatedRoute
    .params
    .subscribe(data =>{
      this.blogService
      .getBlog(this.selectedBlog.id as number)
      .subscribe(Blog => {
        this.id = Blog.id as number;
        this.titre = Blog.titre;
        this.sousTitre = Blog.sousTitre;
        this.categorie = Blog.categorie;
      })
    });
  }

  submitBlog(){
    this.blogService.editBlog(
    {
      id: this.id,
      titre: this.titre,
      sousTitre: this.sousTitre,
      categorie: this.categorie
    });
  }

}
