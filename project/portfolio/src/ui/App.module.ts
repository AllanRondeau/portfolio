import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./App.component";
import {HomeSectionComponent} from "./homePage/HomeSection";
import {HttpProjectRepository} from "../infrastructure/HttpProjectRepository";
import {ProjectSectionComponent} from "./homePage/ProjectSection";
import {AboutSection} from "./homePage/AboutSection";
import {TechsSection} from "./homePage/TechsSection";
import {FormsModule} from "@angular/forms";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        HomeSectionComponent,
        ProjectSectionComponent,
        AboutSection,
        TechsSection
    ],
    providers: [
        {provide: "AsyncProjectRepository", useClass: HttpProjectRepository},
    ],
    bootstrap: [
        AppComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ]
})

export class AppModule {

}
