import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { patientsFeatureName, PatientsState } from './modules/patient/store/patients-store.module';
import { PatientModule } from './modules/patient/patient.module';
import {
    practitionersFeatureName,
    PractitionersState,
} from './modules/practitioner/store/practitioners-store.module';
import { PractitionerModule } from './modules/practitioner/practitioner.module';

export interface AppState {
    [patientsFeatureName]: PatientsState;
    [practitionersFeatureName]: PractitionersState;
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot(),
        PatientModule,
        PractitionerModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
