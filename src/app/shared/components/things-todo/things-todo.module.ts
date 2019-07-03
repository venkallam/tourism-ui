import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThingsTodoComponent} from './things-todo.component';
import {FormModule} from "../form/form.module";
import {MaterialModule} from "../../../material.module";
import {EditFormModule} from "../edit-form/edit-form.module";
import {MatSliderModule} from "@angular/material";

@NgModule({
    declarations: [ThingsTodoComponent],
    imports: [
        CommonModule,
        FormModule,
        MaterialModule,
        EditFormModule,
        MatSliderModule
    ]
})
export class ThingsTodoModule {
}
