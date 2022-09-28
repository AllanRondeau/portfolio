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
            <article>
              <h6>HTML & CSS</h6>
              <p>Started to learn it since <span>september 2021</span>. Those language were the first instructed in my developpement
                degree. </p>
            </article>
          </div>
          <div>
            <img src="assets/SCSS/images/jsIcon.svg" alt="jsIcon">
            <article>
              <h6>JavaScript</h6>
              <p>Started to learn it since <span>january 2022</span> by self-training and udemy online lesson. </p>
            </article>
          </div>
          <div>
            <img src="assets/SCSS/images/tsIcon.svg" alt="tsIcon">
            <img src="assets/SCSS/images/sassIcon.svg" alt="sassIcon">
            <article class="last">
              <h6>TypeScript & SASS</h6>
              <p>Started to learn it since <span>june 2022</span>. I was introduce to those technologies during my first year degree
                internship</p>
            </article>
          </div>
        </article>
        <article *ngIf="selectedTechs === 'back'">
          <div>
            <img src="assets/SCSS/images/mysqlIcon.svg" alt="sqlIcon">
            <article>
              <h6>My sql</h6>
              <p>Started to learn it since <span>november 2021</span>.</p>
            </article>
          </div>
          <div>
            <img src="assets/SCSS/images/phpIcon.svg" alt="phpIcon">
            <article>
              <h6>PHP</h6>
              <p>Started to learn it since <span>december 2021</span>. It's the first back web language that we learned in class. At
                first it was to develop my portfolio's back office.</p>
            </article>
          </div>
          <div>
            <img src="assets/SCSS/images/tsIcon.svg" alt="tsIcon">
            <article class="last">
              <h6>TypeScript</h6>
              <p>Started to learn it during my first year degree internship on <span>june 2022</span>. I used it to create the domain
                logic of the project.</p>
            </article>
          </div>
        </article>
        <article *ngIf="selectedTechs === 'framework'">
          <div>
            <img src="assets/SCSS/images/bootstrapIcon.svg" alt="bootstrapIcon">
            <article >
              <h6>Bootstrap</h6>
              <p>Started to learn it in <span>november 2021</span> to create a front faster on school projects.</p>
            </article>
          </div>
          <div>
            <img src="assets/SCSS/images/angularIcon.svg" alt="angularIcon">
            <article class="last">
              <h6>Angular</h6>
              <p>Started to learn it during my first year degree internship on <span>june 2022</span>.</p>
            </article>
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
