import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent], //Import Components to compile into one page
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
