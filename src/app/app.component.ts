import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pantalla01Component } from './pages/pantalla-01/pantalla-01.component';
import { Pantalla02Component } from './pages/pantalla-02/pantalla-02.component';
import { Pantalla03Component } from './pages/pantalla-03/pantalla-03.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Pantalla01Component, Pantalla02Component, Pantalla03Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-menu';
}
