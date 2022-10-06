import {ChangeDetectionStrategy, Component, inject, Inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
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
          <form>
            <input #name type="text" name="name" (change)="createMessageName(name.value)" placeholder="Full name">
            <input #email type="text" name="email" (change)="createMessageEmail(email.value)" placeholder="Email">
            <input #object type="text" name="object" (change)="createMessageObject(object.value)" placeholder="Object">
            <textarea #content name="content" (change)="createMessageContent(content.value)"
                      placeholder="Write your message."></textarea>
            <button (click)="createCompleteMessage()">Send message !</button>
          </form>
        </article>
      </section>
    `
})

export class ContactSectionComponent{
    readonly ROOT_URL = "backend_v2/portfolio_angular_cli/project/portfolio/src/infrastructure/php/insertMessage.php";
    // CreateNewMessage = new CreateMessage();
    // componentState: BehaviorSubject<ContactSectionComponentState> = new BehaviorSubject(
    //     new ContactSectionComponentState(
    //         new CreateMessage()
    //     )
    // );
    posts?: Observable<any>;

    constructor(@Inject(String)private nameMessage: string,
                private emailMessage: string,
                private contentMessage: string,
                private objectMessage: string,
                private generalError: string,
                private messageComplete: CreateMessage,
                private http: HttpClient) {
    }

    createPostsMessage() {

        // this.posts = this.http.post(this.ROOT_URL + '/posts', )
    }

    createMessageName(name: string) {
        this.nameMessage = name;
    }

    createMessageEmail(email: string) {
        this.emailMessage = email;
    }

    createMessageObject(object: string) {
        this.objectMessage = object;
    }

    createMessageContent(content: string) {
        this.contentMessage = content;
    }

    createCompleteMessage() {
        if (this.nameMessage.length !== 0 &&
            this.emailMessage.length !== 0 &&
            this.objectMessage.length !== 0 &&
            this.contentMessage.length !== 0) {
            this.messageComplete.toMessage(this.nameMessage!, this.emailMessage!, this.objectMessage!, this.objectMessage!);
            console.info(this.messageComplete);
        }else{
            console.info("error");
        }

    }
}

export class ContactSectionComponentState {
    constructor(readonly messageInCreation: CreateMessage,
                readonly technicalError?: string) {
    }
}


