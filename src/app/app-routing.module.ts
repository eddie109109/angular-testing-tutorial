import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from "./users/users.component"; // added new component here
import { FooterComponent } from "./footer/footer.component";  // added new component here

// the below var is for the router link
const routes: Routes = [
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "footer",
    component: FooterComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
