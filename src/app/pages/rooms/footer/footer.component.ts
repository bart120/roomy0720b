import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  rooms = null;
  //private serv: RoomService;

  constructor(private serv: RoomService) {
    //this.serv = serv;
  }

  ngOnInit(): void {
    this.rooms = this.serv.getAllRooms();
    /* this.rooms = [
       { name: 'Pegase', image: 'Pegase.jpg' },
       { name: 'Calliope', image: 'Calliope.jpg' },
       { name: 'Uranie', image: 'Uranie.jpg' }
     ];*/
  }

}
