import {ChangeDetectionStrategy, Component} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: "app-navbar",
        template: `
          <nav class="navbarForComputers">
            <h4>Portfolio</h4>
            <a>Projects</a>
            <a>About me</a>
            <a>Skills</a>
            <a>Contact</a>
            <button>Sign in</button>
          </nav>
          <nav class="navbarForMobile">
            <button id="navButton" (click)="isDisplayedMenu()"><i class="fa-solid fa-arrow-down-short-wide"></i></button>
            <ng-container *ngIf="getStateNavbarMenu() === true">
              <article id="navbarMenu">
                <h4>Portfolio</h4>
                <a>Projects</a>
                <a>About me</a>
                <a>Skills</a>
                <a>Contact</a>
                <button>Sign in</button>
              </article>
            </ng-container>
          </nav>
        `
    }
)

export class NavBarComponent {
    constructor() {

    }

    private isOpenNavbarMenu = false;

    isDisplayedMenu() {
        this.isOpenNavbarMenu = !this.isOpenNavbarMenu;
    }

    getStateNavbarMenu() {
        return this.isOpenNavbarMenu;
    }
}





