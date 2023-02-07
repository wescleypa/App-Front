import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
//import { LoaderComponent } from './components/loader/loader.component';
import { IonicModule     } from '@ionic/angular';
//import { MercadopagoComponent } from './pages/mercadopago/mercadopago.component';
import { LoginComponent } from './pages/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { LogoutComponent } from './components/logout/logout.component';
import { CredzComponent } from './pages/credz/credz.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    //LoaderComponent,
    //MercadopagoComponent,
    LoginComponent,
    LogoutComponent,
    CredzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
