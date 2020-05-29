import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    deletePractitionerAction,
    fulfillAddPractitionerAction,
    fulfillLoadPractitionersAction,
    fulfillRemovePractitionerAction,
    loadPractitionerAction,
    loadPractitionersAction,
} from '../actions/practitioners.actions';
import { exhaustMap, map } from 'rxjs/operators';
import { PractitionersDataService } from '../../data/practitioners-data.service';

@Injectable()
export class PractitionersEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly practitionersDataService: PractitionersDataService,
    ) {}

    public loadPractitionersEffect = createEffect(() =>
        this.actions$.pipe(
            ofType(loadPractitionersAction),
            exhaustMap(() => this.practitionersDataService.getPractitioners()),
            map(practitioners => fulfillLoadPractitionersAction({ practitioners })),
        ),
    );

    public loadPractitionerEffect = createEffect(() =>
        this.actions$.pipe(
            ofType(loadPractitionerAction),
            exhaustMap(({ id }) => this.practitionersDataService.getPractitioner(id)),
            map(practitioner => fulfillAddPractitionerAction({ practitioner })),
        ),
    );

    public deletePractitionerEffect = createEffect(() =>
        this.actions$.pipe(
            ofType(deletePractitionerAction),
            exhaustMap(({ id }) => this.practitionersDataService.deletePractitioner(id)),
            map(({ id }) => fulfillRemovePractitionerAction({ id })),
        ),
    );
}
