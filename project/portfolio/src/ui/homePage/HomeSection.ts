import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: "app-home-section",
        template: `
          <section id="home">
            <article>
              <header><h1><span class="titleMarker"> < </span>Welcome <span class="titleMarker"> > </span></h1></header>
              <h4>I'm Allan Rondeau, a junior web developper</h4>
              <form>
                <button type="button" name="contactHomeLink" id="contactHomeBtn"> Contact me!</button>
                <button type="button" name="discoverHomeLink" id="discoverBtn"> Discover my portfolio</button>
              </form>
              <a href="https://github.com/AllanRondeau" target="blank">Watch few projects on my github</a>
            </article>
            <article>
              <figure></figure>
            </article>
          </section>
        `
    }
)
export class HomeSectionComponent {

}
