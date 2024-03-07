import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{NavbarComponent}from "../myapp/navbar/navbar.component"
import{DashboardComponent} from "../myapp/dashboard/dashboard.component"
import{LoginComponent} from "../myapp/login/login.component"
import { RouterOutlet ,RouterLink,RouterLinkActive} from '@angular/router';
import{FooterComponent}from "../myapp/footer/footer.component"
import{SingupComponent}from "../myapp/singup/singup.component"
import{AboutusComponent}from "../myapp/aboutus/aboutus.component"
import{TeamComponent}from "../myapp/team/team.component"
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    RouterOutlet ,
    RouterLink,RouterLinkActive
    ,FooterComponent,
    SingupComponent,
    AboutusComponent,
    TeamComponent,
    HttpClientModule,
    UserDashboardComponent,
    AdminDashboardComponent
  ],
  exports:[NavbarComponent,
    DashboardComponent,
    LoginComponent,
    FooterComponent,
    SingupComponent,
    AboutusComponent,
    TeamComponent,
    HttpClientModule,
    UserDashboardComponent,
    AdminDashboardComponent
  ]
})
export class MyappModule { }
