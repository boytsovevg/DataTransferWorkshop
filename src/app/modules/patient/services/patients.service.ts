import * as faker from 'faker';
import { GenderType } from '../../../components/person/enums/gender.type';
import { PatientDto } from '../data/dto/patient.dto';
import { getRandom } from '../../../services/random.service';

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
