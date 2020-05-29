import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
