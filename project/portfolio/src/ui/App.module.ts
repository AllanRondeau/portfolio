import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./App.component";
import {HomeSectionComponent} from "./home/HomeSection";
import {HttpProjectRepository} from "../infrastructure/HttpProjectRepository";



@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AppComponent,
        HomeSectionComponent
    ],
    providers: [
        {provide: "AsyncProjectRepository", useClass: HttpProjectRepository}
    ],
    bootstrap: [
        AppComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class AppModule {

}
