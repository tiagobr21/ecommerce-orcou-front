import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './welcome/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './welcome/header/header.component';
import { FooterComponent } from './welcome/footer/footer.component';
import { MainPageComponent } from './ecommerce/main-page/main-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { HeaderEcommerceComponent } from './ecommerce/header-ecommerce/header-ecommerce.component';
import { FooterEcommerceComponent } from './ecommerce/footer-ecommerce/footer-ecommerce.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    WelcomeComponent,
    EcommerceComponent,
    HeaderEcommerceComponent,
    FooterEcommerceComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
