import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PatientDto } from '../dto/patient.dto';
import * as faker from 'faker';

import { GenderType } from '../../../../components/person/enums/gender.type';

const getRandom = (to: number): number => {
    return Math.floor(Math.random() * (to - 1));
};

const createPatient = (gender: GenderType): PatientDto => {
    return {
        id: faker.random.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        birthDate: faker.date.past(getRandom(70)).toJSON(),
        gender,
        practitionerIds: [],
    };
};

const patientsData: PatientDto[] = [
    createPatient(GenderType.Male),
    createPatient(GenderType.Female),
    createPatient(GenderType.Female),
    createPatient(GenderType.Unknown),
    createPatient(GenderType.Male),
];

@Injectable()
export class PatientsDataService {
    private patients = patientsData;

    public getPatients(): Observable<PatientDto[]> {
        return of(this.patients);
    }

    public getPatient(id: string): Observable<PatientDto> {
        return of(this.patients.find(p => p.id === id));
    }

    public deletePatient(id: string): Observable<{ id: string }> {
        this.patients = this.patients.filter(p => p.id !== id);

        return of({ id });
    }
}
