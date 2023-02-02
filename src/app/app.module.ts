import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailModule } from './Feature/user-list/user-detail/user-detail.module';
import { UserListModule } from './Feature/user-list/user-list/user-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserListModule,
    UserDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
