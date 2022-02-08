import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { BlogService } from './blog.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BlogEditFormComponent } from './blog-edit-form/blog-edit-form.component';
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogFormComponent,
    ArticleFormComponent,
    BlogEditFormComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
