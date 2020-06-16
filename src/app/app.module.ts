import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomeContentComponent } from './some-content/some-content.component';
import { ExtractorDirective } from './extractor.directive';

@NgModule({
  declarations: [
    AppComponent,
    SomeContentComponent,
    ExtractorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
