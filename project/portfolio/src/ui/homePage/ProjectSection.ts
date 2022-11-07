import {ChangeDetectionStrategy, Component, Inject} from "@angular/core";
import {AsyncProjectRepository} from "../../application/AsyncProjectRepository";
import {DisplayProject} from "../../application/DisplayProject";
import {BehaviorSubject} from "rxjs";
import {animate, transition } from "@angular/animations";

@Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: "app-project-section",
        template: `
          <section id="projectSection">
            <ng-container *ngIf="projectComponentState |async as projectState">
              <ng-container *ngIf="projectState.projectOnPage as projectOnHomePage">
                <header>
                  <h3>My Projects</h3>
                  <hr>
                </header>
                <div *ngIf="projectState.error == true else errorOk">An error occured while fetching datas. Please try again.</div>
                <ng-template #errorOk>
                  <article id="projectBox">
                    <ng-container *ngFor="let p of projectOnHomePage.projects ; let i = index">
                      <article class="projects">
                        <article>
                          <img src="{{p.filePathImage}}" alt="">
                          <h4>{{p.projectTitle}}</h4>
                          <button [attr.id]="'DetailsBtn'+i" (click)="showDetailsBtn(i)" *ngIf="showDetails != i">See more
                          </button>
                        </article>
                        <article class="projectDetails" *ngIf="showDetails===i" >
                          <p>Date project:<i>{{p.projectStartDate}} - {{p.projectEndDate}}</i></p>
                          <p>Techs used: <i>{{p.projectTechnology}}</i></p>
                          <p>{{p.projectSummary}}</p>
                          <button (click)="hookDetailsBtn()">Close</button>
                        </article>
                      </article>
                    </ng-container>
                  </article>
                </ng-template>
              </ng-container>
            </ng-container>
          </section>
        `
    }
)
export class ProjectSectionComponent {

    projectComponentState: BehaviorSubject<ProjectComponentState> = new BehaviorSubject(
        new ProjectComponentState(
            true,
            new DisplayProject([]),
            undefined,
            false
        )
    );

    constructor(@Inject("AsyncProjectRepository") private projectRepository: AsyncProjectRepository) {
        // Recover datas from a promise once it load
        Promise.all([
            projectRepository.loadProject()
        ]).then(([projects]) => {
            this.projectComponentState.next(
                new ProjectComponentState(
                    false, // when loading is finish, display project on screen
                    new DisplayProject(
                        projects
                    ),
                    undefined,
                        false
                )
            );
            // for developper logs
        }).catch(rejectionCause => {
            console.warn("Error loading datas ; received error", rejectionCause);
            // to warn the user
            this.projectComponentState.next(
                new ProjectComponentState(
                    false,
                    new DisplayProject(
                        [],
                    ),
                    "A technical error occured :" + rejectionCause,
                    true
                )
            );
        });

    }

    showDetails = -1;

    showDetailsBtn(index: number) {
        this.showDetails = index;
    }

    hookDetailsBtn() {
        this.showDetails = -2;
    }

}

export class ProjectComponentState {

    constructor(readonly isLoading: boolean,
                readonly projectOnPage: DisplayProject,
                readonly technicalError?: string,
                readonly error?: boolean) {
    }

}



