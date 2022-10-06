import {Message} from "../domain/Message";



export class CreateMessage {
    readonly messageComplete: boolean = false;

    constructor(readonly generalError?: string,
                private message?: Message) {
    }

    toMessage(name: string, email: string, object: string, content: string) {
        this.message = new Message(name, email, object, content);
    }

    getMessage() {
        return this.message;
    }
}

