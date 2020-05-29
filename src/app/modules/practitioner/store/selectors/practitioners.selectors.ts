import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../../../app.module';
import { practitionersFeatureName, PractitionersState } from '../practitioners-store.module';
import { PractitionerDto } from '../../data/dto/practitioner.dto';
import { PractitionersConvertService } from '../services/practitioners-convert.service';
import { PersonModel } from '../../../../components/person/models/person.model';

export const selectPractitionerFeature = createFeatureSelector<AppState, PractitionersState>(
    practitionersFeatureName,
);

const selectPractitioners = createSelector<AppState, PractitionersState, PractitionerDto[]>(
    selectPractitionerFeature,
    state => state.practitioners,
);

export const selectPractitionerPreviews = createSelector<
    AppState,
    PractitionerDto[],
    PersonModel[]
>(selectPractitioners, practitioners =>
    practitioners.map(practitioner =>
        PractitionersConvertService.convertToPersonModel(practitioner),
    ),
);
