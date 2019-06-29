import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageUploadComponent} from "./image-upload.component";
import {MaterialModule} from "../../../material.module";

@NgModule({
    declarations: [ImageUploadComponent],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [ImageUploadComponent]
})
export class ImageUploadModule {
}
