import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteArtComponent } from './favourite-art.component';

describe('FavouriteArtComponent', () => {
  let component: FavouriteArtComponent;
  let fixture: ComponentFixture<FavouriteArtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteArtComponent]
    });
    fixture = TestBed.createComponent(FavouriteArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
