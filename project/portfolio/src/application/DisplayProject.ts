import {Project} from "../domain/Project";

export class DisplayProject{
    constructor(readonly projects: Array<Project>,
                readonly error?: string) {
        if (projects.length === 0){
            this.error = "An error occured, projects can't be displayed at the moment";
        }
    }
}