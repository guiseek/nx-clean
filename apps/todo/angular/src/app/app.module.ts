import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppProvider } from './app.provider';
import { TodoModule } from './todo/todo.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [TodoModule, BrowserModule, BrowserAnimationsModule],
  providers: [AppProvider.withEnv(environment)],
  bootstrap: [AppComponent],
})
export class AppModule {}
