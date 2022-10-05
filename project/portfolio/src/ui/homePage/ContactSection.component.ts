import {ChangeDetectionStrategy, Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreateMessage} from "../../application/CreateMessage";


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
            <input #name type="text" name="name" (change)="createMessageName(name.value)" placeholder="Full name">
            <input #email type="text" name="email" (change)="createMessageEmail(email.value)" placeholder="Email">
            <input #object type="text" name="object" (change)="createMessageObject(object.value)" placeholder="Object">
            <textarea #content name="content" (change)="createMessageContent(content.value)" placeholder="Write your message."></textarea>
          </form>
        </article>
      </section>
    `
})

export class ContactSectionComponent {
    readonly ROOT_URL = "backend_v2/portfolio_angular_cli/project/portfolio/src/infrastructure/php/insertMessage.php";
    messageEnCour = new CreateMessage();
    // posts: Observable<any>;
    constructor(private http: HttpClient) {
        // createPostsMessage(){
        //
        //     this.posts = this.http.get<post>()
        // }
    }
    createMessageName(name: string){
        console.info("name : ", name);
        return name;
    }
    createMessageEmail(email: string){
        console.info("email: ", email);
        return email;
    }
    createMessageObject(object: string){
        console.info("object", object);
        return object;
    }
    createMessageContent(content: string){
        console.info("content", content);
        return content;
    }
}

export interface Post{
    name: string;
    email: string;
    object: string;
    content: string;
}
