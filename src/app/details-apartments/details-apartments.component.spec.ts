import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsApartmentsComponent } from './details-apartments.component';

describe('DetailsApartmentsComponent', () => {
  let component: DetailsApartmentsComponent;
  let fixture: ComponentFixture<DetailsApartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsApartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
