import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-defer2',
  standalone: true,
  imports: [],
  template: ` <div><strong>Defer2 Component</strong>: {{ text }}</div> `,
  styles: '',
})
export class Defer2Component {
  @Input() text = 'text';
}
