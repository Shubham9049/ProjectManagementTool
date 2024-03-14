import { Routes } from '@angular/router';
import { LoginComponent } from './myapp/login/login.component';
import { DashboardComponent } from './myapp/dashboard/dashboard.component';
import { SingupComponent } from './myapp/singup/singup.component';
import { AboutusComponent } from './myapp/aboutus/aboutus.component';
import { TeamComponent } from './myapp/team/team.component';
import { UserDashboardComponent } from './myapp/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './myapp/admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './myapp/contact/contact.component';
export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"signup",component:SingupComponent},
    {path:"about",component:AboutusComponent},
    {path:"team",component:TeamComponent},
    {path:"user-page",component:UserDashboardComponent},
    {path:"admin-page",component:AdminDashboardComponent},
    {path:"contact-page",component:ContactComponent}
];
