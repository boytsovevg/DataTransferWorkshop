import { Injectable } from '@angular/core';
import { PractitionerDto } from './dto/practitioner.dto';
import { Observable, of } from 'rxjs';

@Injectable()
export class PractitionersDataService {
    private practitioners: PractitionerDto[] = [];

    public getPractitioners(): Observable<PractitionerDto[]> {
        return of(this.practitioners);
    }

    public getPractitioner(id: number): Observable<PractitionerDto> {
        return of(this.practitioners.find(practitioner => practitioner.id === id));
    }

    public deletePractitioner(id: number): Observable<{ id: number }> {
        this.practitioners = this.practitioners.filter(practitioner => practitioner.id !== id);

        return of({ id });
    }
}
