import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientPreviewContainerComponent } from './containers/patient-preview-container/patient-preview-container.component';
import { PersonModule } from '../../components/person/person.module';
import { PatientsStoreModule } from './store/patients-store.module';
import { PatientsDataService } from './data/services/patients-data.service';
import { PatientsPreviewContainerComponent } from './containers/patients-preview-container/patients-preview-container.component';

@NgModule({
    imports: [CommonModule, PersonModule, PatientsStoreModule],
    declarations: [PatientPreviewContainerComponent, PatientsPreviewContainerComponent],
    providers: [PatientsDataService],
    exports: [PatientPreviewContainerComponent, PatientsPreviewContainerComponent],
})
export class PatientModule {}
