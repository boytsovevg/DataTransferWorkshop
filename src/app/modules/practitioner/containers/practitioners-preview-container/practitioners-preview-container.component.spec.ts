import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionersPreviewContainerComponent } from './practitioners-preview-container.component';

describe('PractitionersPreviewContainerComponent', () => {
    let component: PractitionersPreviewContainerComponent;
    let fixture: ComponentFixture<PractitionersPreviewContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PractitionersPreviewContainerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PractitionersPreviewContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
