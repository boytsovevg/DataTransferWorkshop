import { createReducer, on } from '@ngrx/store';
import { PractitionersState } from '../practitioners-store.module';
import {
    fulfillAddPractitionerAction,
    fulfillLoadPractitionersAction,
} from '../actions/practitioners.actions';

const initialState: PractitionersState = {
    practitioners: [],
};

export const practitionersReducer = createReducer(
    initialState,
    on(fulfillAddPractitionerAction, (state, props) => ({
        ...state,
        practitioners: [...state.practitioners, props.practitioner],
    })),
    on(fulfillLoadPractitionersAction, (state, props) => ({
        ...state,
        practitioners: props.practitioners,
    })),
);
