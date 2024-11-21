import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { DashboardComponent } from './features/dashboard/dashboard/components/dashboard.component';
import { AccountListComponent } from './features/accounts/components/account-list.component';


const routes: Routes = [
  { path: '', component: DashboardComponent }, // Redirección por defecto
  { path: 'dashboard', component: DashboardComponent },
  { path: 'accounts', component: AccountListComponent } // Ruta de fallback para rutas no existentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
