import {ChangeDetectionStrategy, Component} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: "app-navbar",
        template: `
          <nav class="navbarForComputers">
            <h4 (click)="goToSection('#home')">Portfolio</h4>
            <a (click)="goToSection('#projectSection')">Projects</a>
            <a (click)="goToSection('#aboutMe')">About me</a>
            <a (click)="goToSection('#techs')">Skills</a>
            <a (click)="goToSection('#contact')">Contact</a>
            <button>Sign in</button>
          </nav>
          <nav class="navbarForMobile">
            <button id="navButton" (click)="isDisplayedMenu()"><i class="fa-solid fa-arrow-down-short-wide"></i></button>
            <ng-container *ngIf="getStateNavbarMenu() === true">
              <article id="navbarMenu">
                <h4 (click)="goToSection('#home')" >Portfolio</h4>
                <a (click)="goToSection('#projectSection')">Projects</a>
                <a (click)="goToSection('#aboutMe')">About me</a>
                <a (click)="goToSection('#techs')">Skills</a>
                <a (click)="goToSection('#contact')">Contact</a>
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

    goToSection(section: string){
        window.location.href = (section)
    }
}





