import { Message } from "../domain/Message";
import {GenerateCommand} from "@angular/cli/commands/generate-impl";


export class CreateMessage{
    readonly messageComplete: boolean = false;
    constructor(readonly message?: Message,
                readonly generalError?: string) {

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
}

