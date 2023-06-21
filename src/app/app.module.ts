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
import {AppRoutingModule} from "./app-routing.module";
import { AboutPageComponent } from './pages/about/components/about-page/about-page.component';
import {HttpClientModule} from "@angular/common/http";
import { TodosPageComponent } from './pages/todos/components/todos-page/todos-page.component';
import {ENVIRONMENT} from "./services/environment-service/environment.service";
import {environment} from "../environments/environment";

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
    TodosPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [{ provide: ENVIRONMENT, useValue: environment }],
  bootstrap: [AppComponent]
})
export class AppModule { }
