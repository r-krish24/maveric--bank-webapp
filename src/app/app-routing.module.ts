import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { Account } from './models/account';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:'login',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'accounts/:cid',component:AccountsComponent,canActivate:[AuthGuard]},
  {path:'account-details/:cid/:aid',component:AccountDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
