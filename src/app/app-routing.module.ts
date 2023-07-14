import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService, canActivateTeam } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[canActivateTeam]
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate:[canActivateTeam]
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate:[canActivateTeam]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
