import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {MaterialModule} from "../../../material.module";

@NgModule({
    declarations: [UsersComponent],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class UsersModule {
}
