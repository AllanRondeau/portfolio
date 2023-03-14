import {JSONProjectRepository} from "./json/JSONProjectRepository";

export class HttpProjectRepository extends JSONProjectRepository{
    constructor() {
        const URL_PROJECT = "backend_v2/portfolio_angular_cli/project/portfolio/src/infrastructure/php/loadProject.php";
        // const URL_PROJECT = "infrastructure/php/loadProject.php";
        super(() => fetch(URL_PROJECT).then(res => res.json())
        );
    }
}
