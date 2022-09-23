import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-about-section",
    template: `
      <section id="aboutMe">
        <header>
          <h3>About me</h3>
          <hr>
        </header>
        <div>
          <article id="profilePic">
          </article>
          <article>
            <p>Hi i'm <span>Allan Rondeau</span>, i'm studying at the <a
              href="https://enseignement-superieur.lycee-stvincent.fr/" target="_blank"> BTS SIO SLAM of Saint Vincent
              high school in Senlis </a>. I'm learning and coding every day to become a full stack developer. Overall
              I'm looking for a way to increase my technical skills. My projects are always developed in a
              self-sufficient logic way . It consists in create the most qualitative code which is fully understandable
              just by reading it</p>
          </article>
        </div>
      </section>
    `
})

export class AboutSectionComponent {

}
