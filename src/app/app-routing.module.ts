import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactComponent } from './contact/contact.component';
import { DetailMaisonComponent } from './detail-maison/detail-maison.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { BlogComponent } from './home/blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
{path: 'home' , component: HomeComponent},
{path: 'about' , component: AboutComponent},
{path: 'contact' , component: ContactComponent},
{path: 'blog' , component: BlogComponent},
{path: 'blog_page' , component: BlogPageComponent},
{path: 'signin', component: SigninComponent},
{path: 'register', component: RegisterComponent},
{path: 'listing', component: ListingComponent},
{path: 'home_detail', component: HomeDetailComponent},
{path: 'detail_maison', component: DetailMaisonComponent},
{path: '**',component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
