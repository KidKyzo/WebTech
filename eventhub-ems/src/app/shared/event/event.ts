import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrls: ['./event.css'],
})
export class Event {
  @Input() title: string = '';
  @Input() description: string = '';
  
  constructor() {
    
  }
  
}
