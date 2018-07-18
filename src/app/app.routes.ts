import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/system/login/login.component';
import { NotfoundComponent } from './components/system/notfound/notfound.component';
import { RegisterComponent } from './components/system/login/register.component';
import { PagesComponent } from './components/pages/pages.component';


const routes: Routes = [
    // { path: '', component: PagesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NotfoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class APP_ROUTES {}
