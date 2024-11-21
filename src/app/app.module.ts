import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionFormComponent } from './features/transactions/components/transaction-form.component';
import { AccountListComponent } from './features/accounts/components/account-list.component';
import { DashboardComponent } from './features/dashboard/dashboard/components/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    TransactionFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Asegúrate de importar el módulo de enrutamiento aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
