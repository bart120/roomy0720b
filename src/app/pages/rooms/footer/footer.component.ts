import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  rooms = null;

  constructor() { }

  ngOnInit(): void {
    this.rooms = [
      { name: 'Pegase', image: 'Pegase.jpg' },
      { name: 'Calliope', image: 'Calliope.jpg' },
      { name: 'Uranie', image: 'Uranie.jpg' }
    ];
  }

}
