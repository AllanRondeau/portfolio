import { Message } from "../domain/Message";


export class CreateMessage{
    // readonly messageComplete: boolean;
    constructor(readonly message?: Message,
                readonly generalError?: string) {

        if (message === 0){}
    }
}

