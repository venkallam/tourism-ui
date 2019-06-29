import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditFormComponent} from './edit-form.component';
import {MaterialModule} from "../../../material.module";
import {ImageUploadModule} from "../image-upload/image-upload.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [EditFormComponent],
    imports: [
        CommonModule,
        MaterialModule,
        ImageUploadModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [EditFormComponent],
    entryComponents: [EditFormComponent]
})
export class EditFormModule {
}
