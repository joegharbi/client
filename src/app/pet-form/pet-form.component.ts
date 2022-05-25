import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {
  @Input() pet = new Pet();
  @Output() save = new EventEmitter<Pet>();

  public petForm = this.fb.group({
    name: ['', Validators.required],
    species: ['', Validators.required],
    birth_date: ['', Validators.required],
    death_date: [''],
    note: ['', Validators.required],
  });

  get name() { return this.petForm.get('name')!; }
  get species() { return this.petForm.get('species')!; }
  get birth_date() { return this.petForm.get('birth_date')!; }
  get death_date() { return this.petForm.get('death_date')!; }
  get note() { return this.petForm.get('note')!; }

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.petForm.patchValue(this.pet)
  }

  handleSubmit() {
    if (this.petForm.valid) {
      this.save.emit(this.petForm.value);
    }
  }

}
