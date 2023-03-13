import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './latout/header/header.component';
import { FooterComponent } from './latout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogListComponent } from './home/blog-list/blog-list.component';
import { CoverComponent } from './home/cover/cover.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ClientsSayComponent } from './home/clients-say/clients-say.component';
import { BestCitiesComponent } from './home/best-cities/best-cities.component';
import { WhyChooseComponent } from './home/why-choose/why-choose.component';
import { BlogComponent } from './home/blog/blog.component';
import { PartenaireComponent } from './home/partenaire/partenaire.component';
import { NotificationComponent } from './notification/notification.component';
import { ContactComponent } from './contact/contact.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListingComponent } from './listing/listing.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { DetailMaisonComponent } from './detail-maison/detail-maison.component';
import { DashboardProComponent } from './dashboard-pro/dashboard-pro.component';
import { AjoutMaisonComponent } from './dashboard-pro/ajout-maison/ajout-maison.component';
import { MainComponent } from './dashboard-pro/main/main.component'
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MainComponent,
    BlogListComponent,
    CoverComponent,
    NotfoundComponent,
    ClientsSayComponent,
    BestCitiesComponent,
    WhyChooseComponent,
    BlogComponent,
    PartenaireComponent,
    NotificationComponent,
    ContactComponent,
    BlogPageComponent,   
    RegisterComponent,
    ListingComponent,
    HomeDetailComponent,
    DetailMaisonComponent,
    DashboardProComponent,
    AjoutMaisonComponent,
    MainComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

