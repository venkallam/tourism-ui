import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsComponent} from './about-us.component';
import {MaterialModule} from "../../../material.module";

@NgModule({
    declarations: [AboutUsComponent],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [AboutUsComponent]
})
export class AboutUsModule {
}
