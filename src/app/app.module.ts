import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { SampleDirectiveDirective } from './sample-directive.directive';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home-page.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponentComponent,
    SampleDirectiveDirective,
    HomeComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
