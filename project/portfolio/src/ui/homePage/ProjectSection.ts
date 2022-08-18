import {ChangeDetectionStrategy, Component, Inject} from "@angular/core";
import {AsyncProjectRepository} from "../../application/AsyncProjectRepository";
import {DisplayProject} from "../../application/DisplayProject";
import {AppComponentState} from "../App.component";
import {BehaviorSubject} from "rxjs";

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
                <ng-container *ngFor="let p of projectOnHomePage.projects">
                  <article>
                    <!--                  <img src="{{p.filePathImage}}" alt="">-->
                    <h4>{{p.projectTitle}}</h4>
                    <button type="button">See more</button>
                  </article>
                  <article class="projectDetails">
                    <p>Date project:<i>{{p.projectStartDate}} - {{p.projectEndDate}}</i></p>
                    <p>Techs used: <i>{{p.projectTechnology}}</i></p>
                    <p>{{p.projectSummary}}</p>
                  </article>
                </ng-container>
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
            new DisplayProject([])
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
                    )
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
                    "A technical error occured :" + rejectionCause
                )
            );
        });

    }

}

export class ProjectComponentState {

    constructor(readonly isLoading: boolean,
                readonly projectOnPage: DisplayProject,
                readonly technicalError?: string) {
    }

}

const ProjectDetails = document.querySelectorAll(".projectDetails");
const btnDisplayDetails = document.querySelectorAll("#projectSection");
//css class
const displayDetails = "displayProjectDetails";
function animationEvent() {
    ProjectDetails.classList.add(displayDetails)
}

btnDisplayDetails.forEach(btn =>
    function displayProjectDetails() {
        btn?.addEventListener("click" , function handClick(event) {
            ProjectDetails.forEach(value => function AnimationEvent(){
                new CSSStyleDeclaration.setProperty()

            });
        });
    }
);


