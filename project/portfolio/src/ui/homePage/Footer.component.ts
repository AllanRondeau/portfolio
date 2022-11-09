import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: "app-footer",
        template: `
          <footer>
            <i (click)="onArrowClick()" class="fa-solid fa-arrow-up"></i>
            <p>All rights to Allan Rondeau<i class="fa-regular fa-copyright"></i></p>
          </footer>
        `
    }
)

export class FooterComponent {
    constructor() {
    }
    private topSectionPage = "#home";
    onArrowClick(){
        window.location.href = (this.topSectionPage);
    }
}
