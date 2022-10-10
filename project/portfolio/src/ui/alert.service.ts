import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
    messages: string[] = [];

    add(alert: string) {
        this.messages.push(alert);
    }

    clear() {
        this.messages = [];
    }
}
