import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrls: ['./event.css'],
})
export class BrowseEvent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() date: string = '';
  @Input() month: string = '';
  @Input() day: string = '';
  @Input() time: string = '';
  @Input() price: string = '';
  @Input() location: string = '';
  constructor() {
  
  }
  
}
