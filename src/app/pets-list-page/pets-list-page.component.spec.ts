import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsListPageComponent } from './pets-list-page.component';

describe('PetsListPageComponent', () => {
  let component: PetsListPageComponent;
  let fixture: ComponentFixture<PetsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
