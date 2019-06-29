import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from './form.component';
import {MaterialModule} from "../../../material.module";
import {ImageUploadModule} from "../image-upload/image-upload.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [FormComponent],
    imports: [
        CommonModule,
        MaterialModule,
        ImageUploadModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [FormComponent],
    entryComponents: [
        FormComponent
    ]
})
export class FormModule {
}
