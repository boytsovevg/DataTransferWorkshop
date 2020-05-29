import * as faker from 'faker';
import { GenderType } from '../../../components/person/enums/gender.type';
import { getRandom } from '../../../services/random.service';
import { PractitionerDto } from '../data/dto/practitioner.dto';

export const createPractitioner = (gender: GenderType): PractitionerDto => {
    return {
        id: faker.random.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        date: faker.date.past(getRandom(70)).toJSON(),
        gender,
        specialties: [],
    };
};
