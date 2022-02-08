import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogEditFormComponent } from './blog-edit-form/blog-edit-form.component';
import { AuthGuard } from './core/auth.guard';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  {
    path: 'blog/:id',
    component: BlogEditFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'subscribe',
    component: SubscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
