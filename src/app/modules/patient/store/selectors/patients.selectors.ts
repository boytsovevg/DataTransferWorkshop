import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../../../app.module';
import { PatientDto } from '../../data/dto/patient.dto';
import { PersonModel } from '../../../../components/person/models/person.model';
import { PatientsConvertService } from '../services/patients-convert.service';
import { patientsFeatureName, PatientsState } from '../patients-store.module';

export const selectPatientsFeature = createFeatureSelector<AppState, PatientsState>(
    patientsFeatureName,
);

export const selectPatients = createSelector<AppState, PatientsState, PatientDto[]>(
    selectPatientsFeature,
    state => state.patients || [],
);

export const selectPatient = createSelector<
    AppState,
    { id: string },
    PatientDto[],
    PatientDto | undefined
>(selectPatients, (state, props) => state.find(patient => patient.id === props.id));

export const selectPatientPreview = createSelector<
    AppState,
    { id: string },
    PatientDto | undefined,
    PersonModel | undefined
>(selectPatient, patient => {
    if (!patient) {
        return undefined;
    }

    return PatientsConvertService.convertToPersonModel(patient);
});

export const selectPatientPreviews = createSelector<AppState, PatientDto[], PersonModel[]>(
    selectPatients,
    patients => patients.map(patient => PatientsConvertService.convertToPersonModel(patient)),
);
