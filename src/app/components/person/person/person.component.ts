import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonModel } from '../models/person.model';

@Component({
    selector: 'my-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonComponent {
    @Input() public person: PersonModel;
    @Output() public personDelete = new EventEmitter<{ id: string }>();

    public handlePersonDeleteClick(id: string): void {
        this.personDelete.emit({ id });
    }

    public getFirstLetters(fullName: string): string {
        return fullName
            .split(' ')
            .map(word => word[0])
            .join('');
    }
}
