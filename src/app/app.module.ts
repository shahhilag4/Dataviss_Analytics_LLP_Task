import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/public/login/login.component';
import { CoreModule } from './core/core.module';
import { UIService } from './core/services/ui.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private router: Router, private uiService:UIService){
    router.events.subscribe((event: Event)=>{

      if(event instanceof NavigationStart ){
        this.uiService.showLoader();
      }

      if (event instanceof NavigationEnd) {
        this.uiService.hideLoader();
      }

      if (event instanceof NavigationError) {
        this.uiService.hideLoader();
      }

    });
  }




}
