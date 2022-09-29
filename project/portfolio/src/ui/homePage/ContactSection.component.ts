import {ChangeDetectionStrategy, Component} from "@angular/core";


@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-contact-section",
    template: `
      <section id="contact">
        <header>
          <h3>Contact</h3>
          <hr>
        </header>
        <article>
          <div></div>
          <form action="ContactSection.component.ts">
            <input type="text" name="name" placeholder="Full name">
            <input type="text" name="email" placeholder="Email">
            <input type="text" name="object" placeholder="Object">
            <textarea name="content" placeholder="Write your message"></textarea>
          </form>
        </article>
      </section>
    `
})

export class ContactSectionComponent {

}
