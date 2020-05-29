import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../app.module';
import { select, Store } from '@ngrx/store';
import { loadPatientsAction } from '../../store/actions/patients.actions';
import { PersonModel } from '../../../../components/person/models/person.model';
import { Observable } from 'rxjs';
import { selectPatientPreviews } from '../../store/selectors/patients.selectors';

@Component({
    selector: 'patients-preview-container',
    templateUrl: './patients-preview-container.component.html',
    styleUrls: ['./patients-preview-container.component.scss'],
})
export class PatientsPreviewContainerComponent implements OnInit {
    public readonly patients$: Observable<PersonModel[]>;

    constructor(private readonly store: Store<AppState>) {
        this.patients$ = this.store.pipe(select(selectPatientPreviews));
    }

    ngOnInit(): void {
        this.store.dispatch(loadPatientsAction());
    }
}
