import { Message } from "../domain/Message";
import {GenerateCommand} from "@angular/cli/commands/generate-impl";


export class CreateMessage{
    readonly messageComplete: boolean = false;
    constructor(readonly name?: string,
                readonly email?: string,
                readonly object?: string,
                readonly content?: string,
                readonly generalError?: string,
                private message?: Message) {

        if (message?.name.length === 0
            || message?.email.length === 0
            || message?.object.length === 0
            || message?.content.length === 0){
            this.generalError = "Please be sure to fill all the form fields";
            this.messageComplete = false;
        }else{
            this.generalError = undefined;
            this.messageComplete = true;
        }
    }
    toMessage(name: string, email: string, object: string, content: string){
        this.message = new Message(name, email, object, content);
    }
}

