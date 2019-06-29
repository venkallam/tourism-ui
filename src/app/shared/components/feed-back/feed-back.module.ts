import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FeedBackComponent} from "./feed-back.component";
import {MaterialModule} from "../../../material.module";

@NgModule({
    declarations: [FeedBackComponent],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule
    ],

    entryComponents: [
        FeedBackComponent
    ]
})
export class FeedBackModule {
}
