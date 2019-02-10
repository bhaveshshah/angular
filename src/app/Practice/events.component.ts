import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styles: [`form {
        width: 30%;
        margin-left: 30px;
        margin-top: 20px;
    }`]
})

export class EventsComponent implements OnInit {
    isButtonActive = false;

    constructor() { }

    ngOnInit() { }

    onClick($event: any) {
        $event.stopPropagation();
        console.log('Event was triggered', $event);
    }

    onkeyUpEvent($event) {
        console.log($event.target.value);
    }

    readVariable(email) {
        console.log(email);
    }
}
