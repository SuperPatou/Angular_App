import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from './models/article.model';
import { Blog } from './models/blog.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private readonly GET_BLOGS = environment.apiUrl + 'Blog/getBlogs/';
  private readonly GET_BLOG = (blogId: number) => {return environment.apiUrl + 'Blog/' + blogId};
  private readonly POST_BLOG = environment.apiUrl + 'Blog';
  private readonly PUT_BLOG = environment.apiUrl + 'Blog';

  private readonly POST_ARTICLE = (blogId: number) => {return environment.apiUrl + 'Blog/' + blogId + '/article'};
  
  constructor(private http: HttpClient) { }

  addBlog(blog: Blog): void{
    this.http.post(this.POST_BLOG, blog)
    .subscribe();
  }

  addArticle(article:Article): void{
    this.http.post(this.POST_ARTICLE(article.blog.id as number), article)
    .subscribe();
  }

  getBlog(id: number): Observable<Blog>{
    return this.http
    .get<Blog>(this.GET_BLOG(id));
  }

  editBlog(blog: Blog){
    this.http
    .put(this.PUT_BLOG, blog)
    .subscribe();
  }

  //permet de representer notre table de Blog sous la forme d'un flux, cela 
  //va provenir du serveur  asp .net core
  getAllBlogs(): Observable<Blog[]>{
    return this.http
    .get<Blog[]>(this.GET_BLOGS);
  }
}
