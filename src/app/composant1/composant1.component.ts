import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-composant1',
  templateUrl: './composant1.component.html',
  styleUrls: ['./composant1.component.css']
})
export class Composant1Component implements OnInit {
  // pers = new Personne(1, 'john', 'doe', '15 rue des', 92250, 'paris', 'France');
  @Input() contacts = [];
  contactSelectioner = [];
  contactDuCarnetAdresse = [];
  // isChecked: boolean;
  constructor() {
    this.contacts = [
      {
        'id': 0,
        'prenom': 'John',
        'nom': 'Doe',
        'adresse' : {
          'rue': '23 rue antoine',
          'codePostale': 75000,
          'ville': 'Paris',
          'pays': 'France',
        },
        'isChecked': false,
        'isSelected': false
      },
      {
        'id': 1,
        'prenom': 'Johnanathan',
        'nom': 'Dowson',
        'adresse' : {
          'rue': '40 rue des olives',
          'codePostale': 75010,
          'ville': 'Paris',
          'pays': 'France',
        },
        'isChecked': false,
        'isSelected': false
      },
      {
        'id': 2,
        'prenom': 'Mark',
        'nom': 'Philips',
        'adresse' : {
          'rue': '11 rue du port',
          'codePostale': 75015,
          'ville': 'Paris',
          'pays': 'France',
        },
        'isChecked': false,
        'isSelected': false
      },
      {
        'id': 3,
        'prenom': 'Jona',
        'nom': 'Eliya',
        'adresse' : {
          'rue': '123 rue de pontoise',
          'codePostale': 75025,
          'ville': 'Paris',
          'pays': 'France',
        },
        'isChecked': false,
        'isSelected': false
      },
    ];
  }

  ngOnInit() {
   // console.log(this.contacts[0].id);
  }
  valider () {
    this.contacts.filter(contact => contact.isChecked).map(x => this.contactSelectioner.push(x));
    this.contacts.filter(contact => contact.isChecked).
    map(contact => this.contacts.splice(this.contacts.indexOf(contact), 1 ));
  }
  deSelectioner (i) {
    this.contactSelectioner[i].isChecked = false;
    this.contacts.push(this.contactSelectioner[i]);
    this.contactSelectioner.splice(i, 1 );
  }
  ajouterContact() {
    this.contactSelectioner.map(contactAuCarnet => this.contactDuCarnetAdresse.push(contactAuCarnet));
    this.contactSelectioner.splice(0, this.contactSelectioner.length);
    console.log(this.contactDuCarnetAdresse);
  }

}
