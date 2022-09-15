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
            <h6>Front</h6>
          </article>
          <article *ngIf="selectedTechs === 'back'">
            <h6>Back</h6>
          </article>
        </section>
    `
})
export class TechsSection{
    selectedTechs?: string;

    options = [
        {name: "front-end technologies", value: "front"},
        {name: "back-end technologies", value: "back"},
        {name: "framework", value: "framework"}
    ];

}
