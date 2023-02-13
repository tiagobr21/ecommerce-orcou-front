import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './welcome/home/home.component';
import { MainPageComponent } from './ecommerce/main-page/main-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

const routes: Routes = [
   {
    path: '',
    redirectTo:'welcome',
    pathMatch: 'full'
  },
  {
    path:'welcome',
    component:WelcomeComponent,
  },
   {
    path:'ecommerce',
    component:EcommerceComponent,
    children:[
      {
        path:'main',
        component:MainPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
