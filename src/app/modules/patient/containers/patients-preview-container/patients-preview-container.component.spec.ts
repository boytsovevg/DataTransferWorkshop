import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsPreviewContainerComponent } from './patients-preview-container.component';

describe('PatientsPreviewContainerComponent', () => {
    let component: PatientsPreviewContainerComponent;
    let fixture: ComponentFixture<PatientsPreviewContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PatientsPreviewContainerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PatientsPreviewContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
