import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PractitionerDto } from '../data/dto/practitioner.dto';
import { practitionersReducer } from './reducer/practitioners.reducer';
import { PractitionersEffects } from './effects/practitioners.effects';

export interface PractitionersState {
    practitioners: PractitionerDto[];
}

export const practitionersFeatureName = 'practitioners';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(practitionersFeatureName, practitionersReducer),
        EffectsModule.forFeature([PractitionersEffects]),
    ],
})
export class PractitionersStoreModule {}
