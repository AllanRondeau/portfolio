import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HandleError, HttpErrorHandler } from '../errorHandler.service';
import { catchError } from 'rxjs/operators';

// @Injectable()
// export class ConfigService{
//     configurl = '././assets/jsonRoot/messageRoot.json';
//     constructor(private http: HttpClient) { }
//
//     getConfig(){
//         return this.http.get<Config>(this.configurl);
//     }
//
// }
//
// export interface Config{
//     messageUrl : string;
// }

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
}

@Injectable()
export class MessageService{
    private messageUrl = "backend_v2/portfolio_angular_cli/project/portfolio/src/infrastructure/php/insertMessage.php";
    private handleError: HandleError;
    constructor(private http: HttpClient,
                httpErrorHandler: HttpErrorHandler){
        this.handleError = httpErrorHandler.createHandleError('messageService')
    }
    private error: string = "";
    addMessage(message: Message): Observable<Message>{
        return this.http.post<Message>(this.messageUrl, message, httpOptions)
            .pipe(
                catchError(this.handleError('addMessage', message))
            );
    }
}

export interface Message {
    name: string;
    email: string;
    object: string;
    content: string;
}


