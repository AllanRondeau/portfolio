import {ChangeDetectionStrategy, Component} from "@angular/core";
import {BehaviorSubject} from "rxjs";

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
            false,
        )
    );
}

export class AppComponentState {

    constructor(readonly isLoading: boolean,
                readonly technicalError?: string) {
    }
}


