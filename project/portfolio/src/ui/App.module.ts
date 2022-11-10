import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./App.component";
import {HomeSectionComponent} from "./homePage/HomeSection";
import {HttpProjectRepository} from "../infrastructure/HttpProjectRepository";
import {ProjectSectionComponent} from "./homePage/ProjectSection";
import {AboutSectionComponent} from "./homePage/AboutSection";
import {TechsSectionComponent} from "./homePage/TechsSection";
import {FormsModule} from "@angular/forms";
import { ContactSectionComponent } from "./homePage/ContactSection.component";
import {HttpClientModule} from "@angular/common/http";
import { AlertService } from "./alert.service";
import { HttpErrorHandler } from "./errorHandler.service";
import { MessageService } from "./homePage/ContactSection.service";
import {FooterComponent} from "./homePage/Footer.component";
import {NavBarComponent} from "./homePage/NavBar.component";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeSectionComponent,
        ProjectSectionComponent,
        AboutSectionComponent,
        TechsSectionComponent,
        ContactSectionComponent,
        FooterComponent,
    ],
    providers: [
        {provide: "AsyncProjectRepository", useClass: HttpProjectRepository},
        AlertService,
        HttpErrorHandler,
        MessageService
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
