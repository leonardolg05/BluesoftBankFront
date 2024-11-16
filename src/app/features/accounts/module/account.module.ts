import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from '../components/account-list.component';
import { AccountRoutingModule } from '../../../account-routing.module';  // Importa la ruta para cuentas

@NgModule({
  declarations: [AccountListComponent],
  imports: [
    CommonModule,
    AccountRoutingModule  // Importa AccountRoutingModule en este módulo
  ],
  exports: [AccountListComponent]
})
export class AccountModule { }
