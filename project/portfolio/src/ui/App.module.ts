import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./App.component";
import {HomeSectionComponent} from "./homePage/HomeSection";
import {HttpProjectRepository} from "../infrastructure/HttpProjectRepository";
import {ProjectSectionComponent} from "./homePage/ProjectSection";



@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AppComponent,
        HomeSectionComponent,
        ProjectSectionComponent,
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
