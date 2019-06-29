import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowFeedbackComponent} from './show-feedback.component';
import {MaterialModule} from "../../../material.module";

@NgModule({
    declarations: [ShowFeedbackComponent],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        ShowFeedbackComponent
    ]
})
export class ShowFeedbackModule {
}
