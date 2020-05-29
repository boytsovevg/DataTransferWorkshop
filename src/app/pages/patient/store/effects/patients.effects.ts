import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PatientsDataService } from '../../data/services/patients-data.service';
import {
    deletePatientAction,
    fulfillAddPatientAction,
    fulfillLoadPatientsAction,
    fulfillRemovePatientAction,
    loadPatientAction,
    loadPatientsAction,
} from '../actions/patients.actions';
import { exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class PatientsEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly patientDataService: PatientsDataService,
    ) {}

    public loadPatientsEffect = createEffect(() =>
        this.actions$.pipe(
            ofType(loadPatientsAction),
            exhaustMap(() => this.patientDataService.getPatients()),
            map(patients => fulfillLoadPatientsAction({ patients })),
        ),
    );

    public loadPatientEffect = createEffect(() =>
        this.actions$.pipe(
            ofType(loadPatientAction),
            exhaustMap(({ id }) => this.patientDataService.getPatient(id)),
            map(patient => fulfillAddPatientAction({ patient })),
        ),
    );

    public deletePatientEffect = createEffect(() =>
        this.actions$.pipe(
            ofType(deletePatientAction),
            exhaustMap(({ id }) => this.patientDataService.deletePatient(id)),
            map(({ id }) => fulfillRemovePatientAction({ id })),
        ),
    );
}
