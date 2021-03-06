import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PractitionersPreviewContainerComponent } from './containers/practitioners-preview-container/practitioners-preview-container.component';
import { PersonModule } from '../../components/person/person.module';
import { PractitionersStoreModule } from './store/practitioners-store.module';
import { PractitionersDataService } from './data/practitioners-data.service';

@NgModule({
    imports: [CommonModule, PersonModule, PractitionersStoreModule],
    declarations: [PractitionersPreviewContainerComponent],
    providers: [PractitionersDataService],
    exports: [PractitionersPreviewContainerComponent],
})
export class PractitionerModule {}
