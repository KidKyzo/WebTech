import { Component } from '@angular/core';
import { Event } from "../../shared/event/event";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [Event, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
