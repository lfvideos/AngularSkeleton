//CORE
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//MODULES
import { PagesModule } from './components/pages/pages.module';

//ROUTES
import { APP_ROUTES } from './app.routes';

//COMPONENTS
import { LoginComponent } from './components/system/login/login.component';
import { RegisterComponent } from './components/system/login/register.component';
import { NotfoundComponent } from './components/system/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
  
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
