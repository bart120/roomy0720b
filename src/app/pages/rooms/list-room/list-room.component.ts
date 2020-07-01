import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { RoomModel } from 'src/app/models/room.model';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styles: [
  ]
})
export class ListRoomComponent implements OnInit {

  rooms: Array<RoomModel> = null;

  constructor(private serv: RoomService) { }

  ngOnInit(): void {
    this.serv.getAllRooms().subscribe(
      data => {
        this.rooms = data;
      },
      err => alert(err.message)
    );
  }

}
