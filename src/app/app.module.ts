import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { SampleDirectiveDirective } from './sample-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponentComponent,
    SampleDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
