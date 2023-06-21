import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login/components/login-page/login-page.component";
import {AboutPageComponent} from "./pages/about/components/about-page/about-page.component";
import {TodosPageComponent} from "./pages/todos/components/todos-page/todos-page.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '', component: TodosPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
