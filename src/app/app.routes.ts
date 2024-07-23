import { Routes } from '@angular/router';
import { Pantalla01Component } from './pages/pantalla-01/pantalla-01.component';
import { Pantalla02Component } from './pages/pantalla-02/pantalla-02.component';
import { Pantalla03Component } from './pages/pantalla-03/pantalla-03.component';



export const routes: Routes = [
    {path: 'pantalla1', component:Pantalla01Component},
    {path: 'pantalla2', component:Pantalla02Component},
    {path: 'pantalla3', component:Pantalla03Component},
];