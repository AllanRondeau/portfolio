import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { HandleError, HttpErrorHandler } from "../errorHandler.service";
import { catchError } from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json",
    })
};

@Injectable()
export class MessageService{
    private messageUrl = "backend_v2/portfolio_angular_cli/project/portfolio/src/infrastructure/php/insertMessage.php";
    private handleError: HandleError;
    constructor(private http: HttpClient,
                httpErrorHandler: HttpErrorHandler){
        this.handleError = httpErrorHandler.createHandleError("messageService")
    }
    private error = "";
    addMessage(message: string): Observable<string>{
        return this.http.post<string>(this.messageUrl, message, httpOptions)
            .pipe(
                catchError(this.handleError("addMessage", message))
            );
    }
}

export interface Message {
    name: string;
    email: string;
    object: string;
    content: string;
}


