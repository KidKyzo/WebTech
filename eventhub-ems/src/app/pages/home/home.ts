import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { BrowseEvent } from "../../shared/browse-event/event";

@Component({
  selector: 'app-home',
  imports: [BrowseEvent, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
