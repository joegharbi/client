import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';

@Component({
  selector: 'app-pets-list-page',
  templateUrl: './pets-list-page.component.html',
  styleUrls: ['./pets-list-page.component.css']
})
export class PetsListPageComponent implements OnInit {

  public pets: Pet[] = [
    { id: 1, name: 'Pet1', birth_date: '10/10/2022', death_date: '11/11/2022', species: 'cat', note: 'nothing' },
    { id: 2, name: 'Pet2', birth_date: '12/12/2022', death_date: '11/11/2022', species: 'cat', note: 'nothing' },
    { id: 3, name: 'Pet3', birth_date: '10/10/2022', death_date: '11/11/2022', species: 'cat', note: 'nothing' },
    { id: 4, name: 'Pet4', birth_date: '10/11/2022', death_date: '11/11/2022', species: 'cat', note: 'nothing' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
