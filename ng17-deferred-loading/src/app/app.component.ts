import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Defer1Component } from './defer1.component';
import { Defer2Component } from './defer2.component';
import { Defer3Component } from './defer3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Defer1Component,
    Defer2Component,
    Defer3Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isChecked = false;
  onChange() {
    this.isChecked = !this.isChecked;
  }
}
