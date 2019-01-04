import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddGavySidhComponent } from './add-gavy-sidh/add-gavy-sidh.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '',   component: LoginComponent},
    { path: 'home',   component: HomeComponent},
    { path: 'videos', component: AddGavySidhComponent},
    { path: 'images', component: DetailComponent},
    { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
