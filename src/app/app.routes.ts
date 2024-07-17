import { Routes } from '@angular/router';
import { Pantalla01Component } from './pages/pantalla-01/pantalla-01.component';
import { Pantalla02Component } from './pages/pantalla-02/pantalla-02.component';
import { Pantalla03Component } from './pages/pantalla-03/pantalla-03.component';

export const routes: Routes = [
    {
        path : 'pantalla-01Component',
        component: Pantalla01Component
    },
    {
        path: 'pantalla-02Component',
        component: Pantalla02Component
    },
    {
        path: 'pantalla-03Component',
        component: Pantalla03Component
    },
];
