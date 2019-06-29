import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MaterialModule} from "./material.module";
import {LoginModule} from "./shared/components/login/login.module";
import {HttpClientModule} from "@angular/common/http";
import {FeedBackModule} from "./shared/components/feed-back/feed-back.module";
import {RouterModule} from "@angular/router";
import {CruiseModule} from "./shared/components/cruise/cruise.module";
import {NavComponent} from "./shared/components/nav/nav.component";
import {NavigationBarComponent} from "./shared/components/navigation-bar/navigation-bar.component";
import {CruiseComponent} from "./shared/components/cruise/cruise.component";
import {CuisineComponent} from "./shared/components/cuisine/cuisine.component";
import {CuisineModule} from "./shared/components/cuisine/cuisine.module";
import {ThingsTodoComponent} from "./shared/components/things-todo/things-todo.component";
import {ThingsTodoModule} from "./shared/components/things-todo/things-todo.module";
import {UsersModule} from "./shared/components/users/users.module";
import {UsersComponent} from "./shared/components/users/users.component";
import {AboutUsModule} from "./shared/components/about-us/about-us.module";
import {AboutUsComponent} from "./shared/components/about-us/about-us.component";
import {ShowFeedbackComponent} from "./shared/components/show-feedback/show-feedback.component";
import {ShowFeedbackModule} from "./shared/components/show-feedback/show-feedback.module";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        NavigationBarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        LoginModule,
        FeedBackModule,
        CruiseModule,
        CuisineModule,
        ThingsTodoModule,
        UsersModule,
        AboutUsModule,
        ShowFeedbackModule,
        RouterModule.forRoot([
            {
                path: "", redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: "cruise", component: CruiseComponent
            },
            {
                path: "cuisine", component: CuisineComponent
            },
            {
                path: "things-todo", component: ThingsTodoComponent
            },
            {
                path: "users", component: UsersComponent
            },
            {
                path: "home", component: AboutUsComponent
            },
            {
                path: "show-feedback", component: ShowFeedbackComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
