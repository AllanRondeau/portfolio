import {ChangeDetectionStrategy, Component} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: "appHomePage-es-root",
        template: `
            <ng-container *ngIf="componentState | async as state">
                <article *ngIf="state.isLoading else loadingHomeOK">Loading</article>
                <ng-template #loadingHomeOK>
                    <section id="home">
                        
                    </section>
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
}

export class AppComponentState {

    constructor(readonly isLoading: boolean,
                readonly technicalError?: string) {
    };

