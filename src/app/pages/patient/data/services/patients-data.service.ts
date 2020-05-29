import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PatientDto } from '../dto/patient.dto';

import { GenderType } from '../../../../components/person/enums/gender.type';
import { createPatient } from '../../services/patients.service';

const patientsData: PatientDto[] = [
    createPatient(GenderType.Male),
    createPatient(GenderType.Female),
    createPatient(GenderType.Female),
    createPatient(GenderType.Unknown),
    createPatient(GenderType.Male),
    createPatient(GenderType.Female),
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
