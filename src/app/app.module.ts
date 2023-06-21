import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { LoginFormComponent } from './pages/login/components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login/components/login-page/login-page.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { AboutPageComponent } from './pages/about/components/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoSearchComponent,
    LoginFormComponent,
    LoginPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
