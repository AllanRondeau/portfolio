export class Message {
    constructor( name: string,
                 email: string,
                 object: string,
                 content: string) {
        if (name.length === 0 || email.length === 0 || object.length === 0 || content.length === 0) {
            throw new Error("Please be sure to fill all the form fields.");
        }
    }
}
