import {Message} from "./Message";


describe("To send a message", () => {
    describe("user need to", () => {
        it("fill all the contact form", () => {
            expect(() => new Message("", "sdrondeauallan@gmail.com", "message", "content")).toThrow();
            expect(() => new Message("allan", "", "message", "content")).toThrow();
            expect(() => new Message("allan", "sdrondeauallan@gmail.com", "", "content")).toThrow();
            expect(() => new Message("allan", "sdrondeauallan@gmail.com", "message", "")).toThrow();

        });
    });
});
