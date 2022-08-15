export class Project {
    constructor(readonly id: number,
                readonly filePathImage: string,
                readonly projectTitle: string,
                readonly projectSummary: string,
                readonly projectStartDate: string,
                readonly projectEndDate: string,
                readonly projectTechnology: string) {
        if (filePathImage.length === 0
            || projectTitle.length === 0
            || projectSummary.length === 0
            || projectStartDate.length === 0
            || projectEndDate.length === 0
            || projectTechnology.length === 0) {
            throw new Error("fill all the project attribute");
        }
    }
}
