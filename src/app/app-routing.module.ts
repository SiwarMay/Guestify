import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactComponent } from './contact/contact.component';
import { AjoutMaisonComponent } from './dashboard-pro/ajout-maison/ajout-maison.component';
import { DashboardProComponent } from './dashboard-pro/dashboard-pro.component';
import { DetailMaisonComponent } from './detail-maison/detail-maison.component';
import { BlogComponent } from './home/blog/blog.component';
import { HomeComponent } from './home/home.component';
import { MaisonsComponent } from './maisons/maisons.component';
import { LoginComponent } from './login/login.component';;
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
{path:'',redirectTo:'/home',pathMatch:'full'},
{path: 'home' , component: HomeComponent},
{path: 'contact' , component: ContactComponent},
{path: 'blog' , component: BlogComponent},
{path: 'blog_page' , component: BlogPageComponent},
{path: 'user/login', component: LoginComponent},
{path: 'user/register', component: RegisterComponent},
{path: 'maisons', component: MaisonsComponent},
{path: 'maison/:id', component: DetailMaisonComponent},
{path: 'dashboard-pro',component:DashboardProComponent},
{path: 'ajoutmaison',component:AjoutMaisonComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
