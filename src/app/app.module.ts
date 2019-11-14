import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import  { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { RecentlyViewedSalesComponent } from './recently-viewed-sales/recently-viewed-sales.component';

import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    RecentlyViewedSalesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, RecentlyViewedSalesComponent]
})

export class AppModule {
    constructor(private injector: Injector) {
        const el = createCustomElement(RecentlyViewedSalesComponent, { injector });
        customElements.define('recently-viewed-sales', el);
    }
}