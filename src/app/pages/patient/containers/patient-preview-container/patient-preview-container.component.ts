import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../app.module';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonModel } from '../../../../components/person/models/person.model';
import { selectPatientPreview } from '../../store/selectors/patients.selectors';
import { loadPatientAction } from '../../store/actions/patients.actions';

@Component({
    selector: 'patient-preview-container',
    templateUrl: './patient-preview-container.component.html',
    styleUrls: ['./patient-preview-container.component.scss'],
})
export class PatientPreviewContainerComponent implements OnInit {
    public patientPreview$: Observable<PersonModel>;

    constructor(private readonly store: Store<AppState>) {
        this.patientPreview$ = this.store.pipe(select(selectPatientPreview, { id: '10' }));
    }

    public ngOnInit(): void {
        this.store.dispatch(loadPatientAction({ id: '10' }));
    }
}
