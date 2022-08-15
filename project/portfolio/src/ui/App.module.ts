import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./App.component";
import {HomeSectionComponent} from "./home/HomeSection";



@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AppComponent,
        HomeSectionComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class AppModule {

}
