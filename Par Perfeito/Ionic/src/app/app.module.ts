import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// 🟢 Importação certa para a nova versão do ngx-mask
import { provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  // 🟢 Aqui vai o provideNgxMask
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideNgxMask(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
