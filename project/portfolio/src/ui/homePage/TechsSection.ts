import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-techs-section",
    template: `
      <section id="techs">
        <header>
          <h3>My skills</h3>
          <hr>
        </header>
        <aside>
          <select #techsDropdown [(ngModel)]="selectedTechs">
            <option *ngFor="let o of options" [value]="o.value">{{o.name}}</option>
          </select>
        </aside>
        <article class="techWrapper" *ngIf="selectedTechs === 'front'">
          <div class="techsDetails">
            <div>
              <img src="assets/SCSS/images/htmlIcon.svg" alt="htmlIcon">
              <img src="assets/SCSS/images/cssIcon.svg" alt="cssIcon">
            </div>
            <article>
              <h6>HTML & CSS</h6>
              <p><span>september 2021</span></p>
            </article>
          </div>
          <div class="techsDetails">
            <div>
              <img src="assets/SCSS/images/jsIcon.svg" alt="jsIcon">
            </div>
            <article>
              <h6>JavaScript</h6>
              <p><span>january 2022</span></p>
            </article>
          </div>
          <div class="techsDetails">
            <div>
              <img src="assets/SCSS/images/tsIcon.svg" alt="tsIcon">
              <img src="assets/SCSS/images/sassIcon.svg" alt="sassIcon">
            </div>
            <article class="last">
              <h6>TypeScript & SASS</h6>
              <p><span>june 2022</span></p>
            </article>
          </div>
        </article>
        <article class="techWrapper" *ngIf="selectedTechs === 'back'">
          <div class="techsDetails">
            <div>
              <img src="assets/SCSS/images/mysqlIcon.svg" alt="sqlIcon">
            </div>
            <article>
              <h6>My sql</h6>
              <p><span>november 2021</span></p>
            </article>
          </div>
          <div class="techsDetails">
            <div>
              <img src="assets/SCSS/images/phpIcon.svg" alt="phpIcon">
            </div>
            <article class="last">
              <h6>PHP</h6>
              <p><span>december 2021</span></p>
            </article>
          </div>
        </article>
        <article class="techWrapper" *ngIf="selectedTechs === 'framework'">
          <div class="techsDetails">
            <div>
              <img src="assets/SCSS/images/angularIcon.svg" alt="angularIcon">
            </div>
            <article>
              <h6>Angular</h6>
              <p><span>june 2022</span></p>
            </article>
          </div>
          <div class="techsDetails">
            <div>
              <img src="assets/SCSS/images/alpinejs_logo.svg" alt="alpineJS">
              <img src="assets/SCSS/images/Tailwind_CSS_Logo.svg.png" alt="tailwindCSS">
            </div>
            <article>
              <h6>AlpineJS & TailwindCSS</h6>
              <p><span>Januray 2023</span></p>
            </article>
          </div>
          <div class="techsDetails">
            <div>
              <img src="assets/SCSS/images/laravel_icon.svg" alt="laravel">
            </div>
            <article>
              <h6>Laravel</h6>
              <p><span>Januray 2023</span></p>
            </article>
          </div>
          <div class="techsDetails">
            <div>
              <img src="assets/SCSS/images/symfony_icon.svg" alt="symfony">
            </div>
            <article class="last">
              <h6>Symfony</h6>
              <p><span>March 2023</span></p>
            </article>
          </div>
        </article>
      </section>
    `
})
export class TechsSectionComponent {
    selectedTechs = "front";
    options = [
        {name: "Front-end technologies", value: "front", selected: "selected"},
        {name: "Back-end technologies", value: "back", selected: ""},
        {name: "Frameworks", value: "framework", selected: ""}
    ];

}
