import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltitudeComponent } from './altitude/altitude.component';
import { BlogEditFormComponent } from './blog-edit-form/blog-edit-form.component';
import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './login/login.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogEditFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'subscribe',
    component: SubscriptionComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'altitude',
    component: AltitudeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
