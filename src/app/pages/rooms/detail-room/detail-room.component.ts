import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomModel } from 'src/app/models/room.model';

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styles: [
  ]
})
export class DetailRoomComponent implements OnInit {

  obsRoom$: Observable<RoomModel>;

  constructor(private serv: RoomService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = this.route.snapshot.params.id;
    this.obsRoom$ = this.serv.getById(id);
  }

}
