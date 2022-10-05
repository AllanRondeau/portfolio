export class Message {
    constructor( readonly name: string,
                 readonly email: string,
                 readonly object: string,
                 readonly content: string) {
        if (name.length === 0 || email.length === 0 || object.length === 0 || content.length === 0) {
            throw new Error("Please be sure to fill all the form fields.");
        }
    }
}
