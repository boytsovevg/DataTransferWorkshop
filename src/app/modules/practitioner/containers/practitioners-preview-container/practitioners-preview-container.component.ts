import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../app.module';
import { select, Store } from '@ngrx/store';
import { loadPractitionersAction } from '../../store/actions/practitioners.actions';
import { Observable } from 'rxjs';
import { PersonModel } from '../../../../components/person/models/person.model';
import { selectPractitionerPreviews } from '../../store/selectors/practitioners.selectors';

@Component({
    selector: 'practitioners-preview-container',
    templateUrl: './practitioners-preview-container.component.html',
    styleUrls: ['./practitioners-preview-container.component.scss'],
})
export class PractitionersPreviewContainerComponent implements OnInit {
    public readonly practitionerPreviews$: Observable<PersonModel[]>;

    constructor(private readonly store: Store<AppState>) {
        this.practitionerPreviews$ = this.store.pipe(select(selectPractitionerPreviews));
    }

    public ngOnInit(): void {
        this.store.dispatch(loadPractitionersAction());
    }
}
