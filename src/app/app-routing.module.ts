import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './home/start-page/start-page.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SupportComponent } from './support/support.component';
import { CaloriesComponent } from './feature/calories/calories.component';
import { CaloriesGuard } from './guards/calories.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] },
  { path: 'contact-us', component: SupportComponent },
  { path: 'calories', component: CaloriesComponent, canActivate: [CaloriesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
