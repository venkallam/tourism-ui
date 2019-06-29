import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'kiel-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'tourism-ui';

    constructor(private router: Router) {
    }


}
