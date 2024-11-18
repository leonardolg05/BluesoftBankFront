import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AccountModule } from './features/accounts/module/account.module';
import { TransactionFormComponent } from './core/components/transaction-form.component';
import { FormsModule } from '@angular/forms';
import { TransactionHistoryComponent } from './core/components/transaction-history.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionFormComponent,
    TransactionHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AccountModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
