import { GenderType } from '../../../components/person/enums/gender.type';
import { PatientDto } from '../data/dto/patient.dto';
import * as faker from 'faker';

const getRandom = (to: number): number => {
    return Math.floor(Math.random() * (to - 1));
};

export const createPatient = (gender: GenderType): PatientDto => {
    return {
        id: faker.random.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        birthDate: faker.date.past(getRandom(70)).toJSON(),
        gender,
        practitionerIds: [],
    };
};
