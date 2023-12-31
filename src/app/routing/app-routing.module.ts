import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "../pages/login/components/login-page/login-page.component";
import {AboutPageComponent} from "../pages/about/components/about-page/about-page.component";
import {TodosPageComponent} from "../pages/todos/components/todos-page/todos-page.component";
import {AuthGuard} from "./guards/auth.guard";
import {CharacterPageComponent} from "../pages/character/components/character-page/character-page.component";
import {FilmsPageComponent} from "../pages/films/components/films-page/films-page.component";
import {SwapperPageComponent} from "../pages/swapper/components/swapper-page/swapper-page.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'character', component: CharacterPageComponent },
  { path: 'films', component: FilmsPageComponent },
  { path: 'swapper', component: SwapperPageComponent },
  { path: '', component: TodosPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
