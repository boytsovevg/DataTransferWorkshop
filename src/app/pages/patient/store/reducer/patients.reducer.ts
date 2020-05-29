import { createReducer, on } from '@ngrx/store';
import { fulfillAddPatientAction, fulfillLoadPatientsAction } from '../actions/patients.actions';
import { PatientsState } from '../patients-store.module';

const initialState: PatientsState = {
    patients: [],
};

export const patientsReducer = createReducer<PatientsState>(
    initialState,
    on(fulfillAddPatientAction, (state, props) => ({
        ...state,
        patients: [...state.patients, props.patient],
    })),
    on(fulfillLoadPatientsAction, (state, props) => ({
        ...state,
        patients: props.patients,
    })),
);
