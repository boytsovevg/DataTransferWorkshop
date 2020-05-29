import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { patientsFeatureName, PatientsState } from './pages/patient/store/patients-store.module';
import { PatientModule } from './pages/patient/patient.module';

export interface AppState {
    [patientsFeatureName]: PatientsState;
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PatientModule,
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
