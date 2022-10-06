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
          <form>
            <input #name type="text" name="name" (change)="createMessageName(name.value)"
                   placeholder="Full name">
            <input #email type="text" name="email" (change)="createMessageEmail(email.value)" placeholder="Email">
            <input #object type="text" name="object" (change)="createMessageObject(object.value)"
                   placeholder="Object">
            <textarea #content name="content" (change)="createMessageContent(content.value)"
                      placeholder="Write your message."></textarea>
            <button (click)="createCompleteMessage()">Send message !</button>
          </form>
        </article>
      </section>
    `
})

export class ContactSectionComponent {
    readonly ROOT_URL = "backend_v2/portfolio_angular_cli/project/portfolio/src/infrastructure/php/insertMessage.php";
    // CreateNewMessage = new CreateMessage();
    componentValue: ContactSectionComponentValue =
        new ContactSectionComponentValue(
            "",
            "",
            "",
            "",
            new CreateMessage()
        );
    posts?: Observable<any>;

    constructor(private http: HttpClient) {
    }

    createPostsMessage() {

        // this.posts = this.http.post(this.ROOT_URL + '/posts', )
    }

    createMessageName(name: string) {
        console.info(name);
        this.componentValue.withMessageName(name);
    }

    createMessageEmail(email: string) {
        this.componentValue.withMessageEmail(email);
    }

    createMessageObject(object: string) {
        this.componentValue.withMessageObject(object);
    }

    createMessageContent(content: string) {
        this.componentValue.withMessageContent(content);
    }
    createCompleteMessage() {
        if (this.componentValue.getNameMessage().length !== 0 &&
            this.componentValue.getEmailMessage().length !== 0 &&
            this.componentValue.getObjectMessage().length !== 0 &&
            this.componentValue.getContentMessage().length !== 0) {
            this.componentValue.getMessageComplete()?.toMessage(this.componentValue.getNameMessage(),
                                                                this.componentValue.getEmailMessage(),
                                                                this.componentValue.getObjectMessage(),
                                                                this.componentValue.getContentMessage());
            console.info(this.componentValue.getMessageComplete().getMessage());
        } else {
            console.info("error");
        }
    }
}

export class ContactSectionComponentValue {
    constructor(private nameMessage: string,
                private emailMessage: string,
                private contentMessage: string,
                private objectMessage: string,
                private messageComplete: CreateMessage,
                private generalError?: string) {
    }

    withMessageName(name: string) {
        return this.nameMessage = name;
    }
    withMessageEmail(email: string) {
        return this.emailMessage = email;
    }
    withMessageObject(object: string) {
        return this.objectMessage = object;
    }
    withMessageContent(content: string) {
        return this.contentMessage = content;
    }
    getNameMessage(){
        return this.nameMessage;
    }
    getEmailMessage(){
        return this.emailMessage;
    }
    getObjectMessage(){
        return this.objectMessage;
    }
    getContentMessage(){
        return this.contentMessage;
    }
    getMessageComplete(){
        return this.messageComplete;
    }

}



