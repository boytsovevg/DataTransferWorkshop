import { formatDistanceToNowStrict } from 'date-fns';

import { PatientDto } from '../../data/dto/patient.dto';
import { PersonModel } from '../../../../components/person/models/person.model';
import { GenderType } from '../../../../components/person/enums/gender.type';

export class PatientsConvertService {
    public static convertToPersonModel(patientDto: PatientDto): PersonModel {
        const { id, firstName, lastName, birthDate, gender } = patientDto;

        return {
            id,
            fullName: `${firstName} ${lastName}`,
            age: formatDistanceToNowStrict(new Date(birthDate)),
            gender: GenderType[gender],
        };
    }
}
