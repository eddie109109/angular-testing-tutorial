import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"; // to use form, we have to import this form module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './users/login/login.component';
import {MyErrorDirective} from "./app.myerrordirective";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // this is an extra directive I created separately

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    MyErrorDirective,
    HeaderComponent,
    FooterComponent, //added this for the directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
