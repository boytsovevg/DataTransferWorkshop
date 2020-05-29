import { PractitionerDto } from '../../data/dto/practitioner.dto';
import { PersonModel } from '../../../../components/person/models/person.model';
import { formatDistanceToNowStrict } from 'date-fns';
import { GenderType } from '../../../../components/person/enums/gender.type';

export class PractitionersConvertService {
    public static convertToPersonModel(practitionerDto: PractitionerDto): PersonModel {
        const { id, date, firstName, lastName, gender } = practitionerDto;

        return {
            id: id.toString(),
            fullName: `${firstName} ${lastName}`,
            age: formatDistanceToNowStrict(new Date(date)),
            gender: GenderType[gender],
        };
    }
}
