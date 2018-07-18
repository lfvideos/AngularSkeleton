import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [{ 
    path: '', 
    component: PagesComponent, 
    //canActivate: [LoginGuardGuard],
    children: [
        { path: 'dashboard', component: DashboardComponent , data:{titulo:"Dashboard"} },
        
        //DEFAULT
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PAGES_ROUTES {}
