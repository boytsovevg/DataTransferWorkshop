import { createAction, props } from '@ngrx/store';
import { PractitionerDto } from '../../data/dto/practitioner.dto';

const practitionersFeature = '[practitioners]';

export const loadPractitionersAction = createAction(
    `${practitionersFeature} loadPractitionersAction`,
);

export const fulfillLoadPractitionersAction = createAction(
    `${practitionersFeature} fulfillLoadPractitionersAction`,
    props<{ practitioners: PractitionerDto[] }>(),
);

export const loadPractitionerAction = createAction(
    `${practitionersFeature} loadPractitionerAction`,
    props<{ id: number }>(),
);

export const deletePractitionerAction = createAction(
    `${practitionersFeature} deletePractitionerAction`,
    props<{ id: number }>(),
);

export const fulfillAddPractitionerAction = createAction(
    `${practitionersFeature} fulfillAddPractitionerAction`,
    props<{ practitioner: PractitionerDto }>(),
);

export const fulfillRemovePractitionerAction = createAction(
    `${practitionersFeature} fulfillRemovePractitionerAction`,
    props<{ id: number }>(),
);
