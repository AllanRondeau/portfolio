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
        <article *ngIf="selectedTechs === 'front'">
          <div>
            <img src="assets/SCSS/images/htmlIcon.svg" alt="htmlIcon">
            <img src="assets/SCSS/images/cssIcon.svg" alt="cssIcon">
            <div>
              <h6>HTML & CSS</h6>
              <p>Started to learn it since september 2021. Those language were the first instructed in my developpement
                degree. </p>
            </div>
          </div>
          <div>
            <img src="assets/SCSS/images/jsIcon.svg" alt="jsIcon">
            <div>
              <h6>JavaScript</h6>
              <p>Started to learn it since january 2022 by self-training and udemy online lesson. </p>
            </div>
          </div>
          <div>
            <img src="assets/SCSS/images/tsIcon.svg" alt="tsIcon">
            <img src="assets/SCSS/images/sassIcon.svg" alt="sassIcon">
            <div>
              <h6>TypeScript & SASS</h6>
              <p>Started to learn it since june 2022. I was introduce to those technologies during my first year degree
                internship</p>
            </div>
          </div>
        </article>
        <article *ngIf="selectedTechs === 'back'">
          <div>
            <img src="assets/SCSS/images/mysqlIcon.svg" alt="sqlIcon">
            <div>
              <h6>My sql</h6>
              <p>Started to learn it since november 2021.</p>
            </div>
          </div>
          <div>
            <img src="assets/SCSS/images/phpIcon.svg" alt="phpIcon">
            <div>
              <h6>PHP</h6>
              <p>Started to learn it since december 2021. It's the first back web language that we learned in class. At
                first it was to develop my portfolio's back office.</p>
            </div>
          </div>
          <div>
            <img src="assets/SCSS/images/tsIcon.svg" alt="tsIcon">
            <div>
              <h6>TypeScript</h6>
              <p>Started to learn it during my first year degree internship on june 2022. I used it to create the domain
                logic of the project.</p>
            </div>
          </div>
        </article>
        <article *ngIf="selectedTechs === 'framework'">
          <div>
            <img src="assets/SCSS/images/bootstrapIcon.svg" alt="bootstrapIcon">
            <div>
              <h6>Bootstrap</h6>
              <p>Started to learn it in november 2021 to create a front faster on school projects.</p>
            </div>
          </div>
          <div>
            <img src="assets/SCSS/images/angularIcon.svg" alt="angularIcon">
            <div>
              <h6>Angular</h6>
              <p>Started to learn it during my first year degree internship on june 2022.</p>
            </div>
          </div>
        </article>
      </section>
    `
})
export class TechsSectionComponent {
    selectedTechs = "front";
    options = [
        {name: "front-end technologies", value: "front", selected: "selected"},
        {name: "back-end technologies", value: "back", selected: ""},
        {name: "Frameworks", value: "framework", selected: ""}
    ];

}
