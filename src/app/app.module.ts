import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

import { SearchPipe } from './pipes/search.pipe';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

// Components
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AddGavySidhComponent } from './add-gavy-sidh/add-gavy-sidh.component';
import { HomeComponent } from './home/home.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ActionBarComponent } from './action-bar/action-bar.component';

// Services
import { DataControllerService } from './service/data-controller.service';
import { CookieService } from 'ngx-cookie-service';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AddGavySidhComponent,
    HomeComponent,
    PageTitleComponent,
    ActionBarComponent,
    DetailComponent,
    LoginComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  providers: [
    DataControllerService,
    CookieService
  ],
  exports: [SearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
