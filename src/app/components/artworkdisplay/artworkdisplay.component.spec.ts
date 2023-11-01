import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkdisplayComponent } from './artworkdisplay.component';

describe('ArtworkdisplayComponent', () => {
  let component: ArtworkdisplayComponent;
  let fixture: ComponentFixture<ArtworkdisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtworkdisplayComponent]
    });
    fixture = TestBed.createComponent(ArtworkdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
