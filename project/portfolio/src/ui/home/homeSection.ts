import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: "app-home-section",
        template: `
          <section id="home">
            <article>
              <header>Welcome</header>
              <h4>I'm Allan Rondeau, a junior web developper</h4>
              <button type="button" name="contactHomeLink"> Contact me!</button>
              <button type="button" name="discoverHomeLink"> Discover my portfolio</button>
              <a href="https://github.com/AllanRondeau" target="_blank"></a>
            </article>
            <figure></figure>
          </section>
        `
    }
)
export class HomeSectionComponent {

}
