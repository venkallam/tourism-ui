import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CuisineComponent} from './cuisine.component';
import {FormModule} from "../form/form.module";
import {MaterialModule} from "../../../material.module";
import {EditFormModule} from "../edit-form/edit-form.module";

@NgModule({
    declarations: [CuisineComponent],
    imports: [
        CommonModule,
        FormModule,
        MaterialModule,
        EditFormModule
    ]
})
export class CuisineModule {
}
