import {AsyncProjectRepository} from "../../application/AsyncProjectRepository";

import {Project} from "../../domain/Project";
import {AsyncJSONProducerFunction} from "./AsyncJSONProducerFunction";

/* Create type to match with json struct from loadProject.php*/
export type ProjectsJSONShape = { id?: string,
                                    filePathImage?: string,
                                    projectTitle?: string,
                                    projectSummary?: string,
                                    projectStartDate?: string,
                                    projectEndDate?: string,
                                    projectTechnology?: string };
export type LoadProjectReturnShape = Array<ProjectsJSONShape>;
/* Create type to contain result of JSON shape */


export class JSONProjectRepository implements AsyncProjectRepository{
    constructor(readonly projectJSONProducer: AsyncJSONProducerFunction<LoadProjectReturnShape>){
    }

    private loadTransformProject(projectJSONProducer: () => Promise<Array<ProjectsJSONShape>>){
        return projectJSONProducer().then(
            (results: LoadProjectReturnShape) => {
                const validProjectsArray: Array<Project> = [];
                results.forEach(nextJsonElement => {
                    const conversionResult: Project | null = this.convertToProject(nextJsonElement);
                    if (conversionResult) {
                        validProjectsArray.push(conversionResult);
                    } else {
                        console.warn("converting next json entry to product failed; received json was", nextJsonElement);
                    }
                });
                return validProjectsArray;
            }
        ).catch(
            e => {
                console.warn("An error occured fetching datas...", e);
                return [];
            }
        );
    }

    loadProject(): Promise<Array<Project>> {
        return this.loadTransformProject(this.projectJSONProducer);
    }

    private convertToProject(json: ProjectsJSONShape) {
        if (json.id &&
            json.filePathImage &&
            json.projectTitle &&
            json.projectSummary &&
            json.projectStartDate &&
            json.projectEndDate &&
            json.projectTechnology){
            return new Project(
                parseInt(json.id, 10),
                json.filePathImage,
                json.projectTitle,
                json.projectSummary,
                json.projectStartDate,
                json.projectEndDate,
                json.projectTechnology
            );
        } else {
            return null;
        }
    }

}
