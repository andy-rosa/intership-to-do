import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './pages/todos/components/todo-item/todo-item.component';
import { TodoListComponent } from './pages/todos/components/todo-list/todo-list.component';
import { TodoAddComponent } from './pages/todos/components/todo-add/todo-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TodoSearchComponent } from './pages/todos/components/todo-search/todo-search.component';
import { LoginFormComponent } from './pages/login/components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login/components/login-page/login-page.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./routing/app-routing.module";
import { AboutPageComponent } from './pages/about/components/about-page/about-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { TodosPageComponent } from './pages/todos/components/todos-page/todos-page.component';
import {ENVIRONMENT} from "./services/environment-service/environment.service";
import {environment} from "../environments/environment";
import {JwtInterceptor} from "./shared/interceptors/jwt.interceptors";
import { NavbarComponent } from './widgets/navbar/navbar.component';
import { CharacterPageComponent } from './pages/character/components/character-page/character-page.component';
import { FilmsPageComponent } from './pages/films/components/films-page/films-page.component';
import { SwapperPageComponent } from './pages/swapper/components/swapper-page/swapper-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoSearchComponent,
    LoginFormComponent,
    LoginPageComponent,
    AboutPageComponent,
    TodosPageComponent,
    NavbarComponent,
    CharacterPageComponent,
    FilmsPageComponent,
    SwapperPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [
    { provide: ENVIRONMENT, useValue: environment },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
