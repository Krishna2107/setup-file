import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './common-modules/header/header.component';


const routes: Routes = [
  {
    path: '',
    // component: HomeComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
