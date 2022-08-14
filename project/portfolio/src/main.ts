import {environment} from "./environments/environment";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./ui/app.module";
import {enableProdMode} from "@angular/core";

if (environment.production) {
    enableProdMode();
}
//
// This will wait for all resources to load before bootstraping angular (scripts AND css).
// This will prevent some FOUC (text with no style).
// You should display some skeleton in the page for waiting.
window.onload = () => {
    platformBrowserDynamic().bootstrapModule(AppModule)
        .catch(err => console.error(err));
};
