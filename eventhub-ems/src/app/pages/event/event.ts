// import { Component, input } from '@angular/core';

// @Component({
//   selector: 'app-event',
//   imports: [],
//   templateUrl: './event.html',
//   styleUrl: './event.css',
// })
// export class Event {
//   @input() title: string = '';

// }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrls: ['./event.css'],
})
export class Event {
  @Input() title: string = '';

}
