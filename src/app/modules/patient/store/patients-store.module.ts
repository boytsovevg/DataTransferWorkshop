import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { patientsReducer } from './reducer/patients.reducer';
import { PatientsEffects } from './effects/patients.effects';
import { PatientDto } from '../data/dto/patient.dto';

export const patientsFeatureName = 'patients';

export interface PatientsState {
    patients: PatientDto[];
}

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(patientsFeatureName, patientsReducer),
        EffectsModule.forFeature([PatientsEffects]),
    ],
})
export class PatientsStoreModule {}
