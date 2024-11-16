import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountModule } from './features/accounts/module/account.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, AccountModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'bluesofBank';
}
