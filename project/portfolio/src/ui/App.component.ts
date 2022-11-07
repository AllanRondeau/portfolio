import {ChangeDetectionStrategy, Component, Inject, inject, ViewChild} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Project} from "../domain/Project";
import {AsyncProjectRepository} from "../application/AsyncProjectRepository";
import {DisplayProject} from "../application/DisplayProject";

@Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: "app-es-root",
        template: `
              <main>
                <app-home-section></app-home-section>
                <app-project-section></app-project-section>
                <app-about-section></app-about-section>
                <app-techs-section></app-techs-section>
                <app-contact-section></app-contact-section>
              </main>
        `
    }
)

export class AppComponent {

}



