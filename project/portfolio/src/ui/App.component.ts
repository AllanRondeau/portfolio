import {ChangeDetectionStrategy, Component, Inject, inject} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Project} from "../domain/Project";
import {AsyncProjectRepository} from "../application/AsyncProjectRepository";
import {DisplayProject} from "../application/DisplayProject";

@Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: "app-es-root",
        template: `
          <ng-container *ngIf="componentState | async as state">
            <div *ngIf="state.isLoading else loadingHomeOK">Loading</div>
            <ng-template #loadingHomeOK>
              <main>
                <app-home-section></app-home-section>
                <app-project-section></app-project-section>
              </main>
            </ng-template>
          </ng-container>
        `
    }
)
export class AppComponent {

    componentState: BehaviorSubject<AppComponentState> = new BehaviorSubject(
        new AppComponentState(
            false
        )
    );

}

export class AppComponentState {

    constructor(readonly isLoading: boolean) {
    }

}


