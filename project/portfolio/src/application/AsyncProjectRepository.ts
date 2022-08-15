import {Project} from "../domain/Project";

export interface AsyncProjectRepository{
    loadProject(): Promise<Array<Project>>;
}
