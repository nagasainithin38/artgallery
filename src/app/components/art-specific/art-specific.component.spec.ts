import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtSpecificComponent } from './art-specific.component';

describe('ArtSpecificComponent', () => {
  let component: ArtSpecificComponent;
  let fixture: ComponentFixture<ArtSpecificComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtSpecificComponent]
    });
    fixture = TestBed.createComponent(ArtSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
