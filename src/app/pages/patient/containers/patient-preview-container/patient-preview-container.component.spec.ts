import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPreviewContainerComponent } from './patient-preview-container.component';

describe('PatientPreviewContainerComponent', () => {
    let component: PatientPreviewContainerComponent;
    let fixture: ComponentFixture<PatientPreviewContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PatientPreviewContainerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PatientPreviewContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
