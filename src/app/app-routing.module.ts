import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
//import { MercadopagoComponent } from './pages/mercadopago/mercadopago.component';
import { LoginComponent  } from './pages/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CredzComponent  } from './pages/credz/credz.component';

const routes: Routes = [
    { path: ''           , component: DashboardComponent   }
 // , { path: 'mercadopago', component: MercadopagoComponent }
  , { path: 'credz'      , component: CredzComponent       }
  , { path: 'login'      , component: LoginComponent       }
  , { path: 'logout'     , component: LogoutComponent      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
