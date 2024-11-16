import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { throwIfAlreadyLoaded } from './guards/module-import-guard';

@NgModule({
  imports: [
    HttpClientModule, // Permite que los servicios que hacen solicitudes HTTP estén disponibles en la aplicación
  ],
  providers: [
    // Registrar servicios que necesitan estar disponibles en toda la aplicación
    // por ejemplo: AccountService, AuthService, etc.
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
