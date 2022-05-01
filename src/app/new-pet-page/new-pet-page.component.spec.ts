import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPetPageComponent } from './new-pet-page.component';

describe('NewPetPageComponent', () => {
  let component: NewPetPageComponent;
  let fixture: ComponentFixture<NewPetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPetPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
