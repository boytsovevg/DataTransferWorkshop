import { createAction, props } from '@ngrx/store';
import { PatientDto } from '../../data/dto/patient.dto';

const patientsFeature = '[patients]';

export const loadPatientsAction = createAction(`${patientsFeature} loadPatientsAction`);

export const fulfillLoadPatientsAction = createAction(
    `${patientsFeature} fulfillLoadPatientsAction`,
    props<{ patients: PatientDto[] }>(),
);

export const loadPatientAction = createAction(
    `${patientsFeature} loadPatientAction`,
    props<{ id: string }>(),
);

export const deletePatientAction = createAction(
    `${patientsFeature} deletePatientAction`,
    props<{ id: string }>(),
);

export const fulfillAddPatientAction = createAction(
    `${patientsFeature} fulfillAddPatientAction`,
    props<{ patient: PatientDto }>(),
);

export const fulfillRemovePatientAction = createAction(
    `${patientsFeature} fulfillRemovePatientAction`,
    props<{ id: string }>(),
);
