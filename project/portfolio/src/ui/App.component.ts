import {ChangeDetectionStrategy, Component, Inject, inject} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Project} from "../domain/Project";
import {AsyncProjectRepository} from "../application/AsyncProjectRepository";

@Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: "app-es-root",
        template: `
          <ng-container *ngIf="componentState | async as state">
            <div *ngIf="state.isLoading else loadingHomeOK">Loading</div>
            <ng-template #loadingHomeOK>
              <app-home-section></app-home-section>
            </ng-template>
          </ng-container>
        `
    }
)
export class AppComponent {

    componentState: BehaviorSubject<AppComponentState> = new BehaviorSubject(
        new AppComponentState(
            true,
        )
    );

    constructor(@Inject("AsyncProjectRepository") private projectRepository: AsyncProjectRepository) {
        // Recover datas from a promise once it load
        Promise.all([
            projectRepository.loadProject()
        ]).then(([projects]) => {
            this.componentState.next(
                new AppComponentState(
                    false, // when loading is finish, display project on screen
                )
            );
            console.info(projectRepository);
            // for developper logs
        }).catch(rejectionCause => {
            console.warn("Error loading datas ; received error", rejectionCause);
            // to warn the user
            this.componentState.next(
                new AppComponentState(
                    false,
                    "A technical error occured :" + rejectionCause
                )
            );
        });

    }
}

export class AppComponentState {

    constructor(readonly isLoading: boolean,
                readonly technicalError?: string) {
    }

    finishedLoading = () =>
        new AppComponentState(
            false,
            this.technicalError
        )
}


