import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'kiel-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() {}



}
