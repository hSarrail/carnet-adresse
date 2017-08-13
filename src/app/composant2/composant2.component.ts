import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-composant2',
  templateUrl: './composant2.component.html',
  styleUrls: ['./composant2.component.css']
})
export class Composant2Component implements OnInit {
  @Input() contactDuCarnetAdresse: any [];
  @Input() contactRetournee = [];

  constructor() {
    // code here
  }

  ngOnInit() {
  }
  supprimerCarnetAdresse (i) {
    this.contactDuCarnetAdresse[i].isChecked = false;
    this.contactRetournee.push(this.contactDuCarnetAdresse[i]);
    this.contactDuCarnetAdresse.splice(i, 1 );
  }
}
