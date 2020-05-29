import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';

@NgModule({
    imports: [CommonModule],
    declarations: [PersonComponent],
    exports: [PersonComponent],
})
export class PersonModule {}
