import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { PersonModule } from './components/person/person.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PersonModule,
        StoreModule.forRoot({}, {}),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
