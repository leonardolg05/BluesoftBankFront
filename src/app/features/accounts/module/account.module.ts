import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from '../components/account-list.component';
import { AccountRoutingModule } from '../../../account-routing.module';  // Importa la ruta para cuentas
import { TransactionFormComponent } from '../../../core/components/transaction-form.component';

@NgModule({
  declarations: [AccountListComponent],
  imports: [
    CommonModule,
    TransactionFormComponent,
    AccountRoutingModule
  ],
  exports: [AccountListComponent]
})
export class AccountModule { }
