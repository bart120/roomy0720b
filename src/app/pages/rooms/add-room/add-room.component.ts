import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomService } from '../services/room.service';
import { RoomModel } from 'src/app/models/room.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styles: [
  ]
})
export class AddRoomComponent implements OnInit {

  formRoom = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    seatCount: new FormControl('10'),
    image: new FormControl('', [Validators.required])
  });

  pictures: Array<any> = [
    { file: 'Pegase.jpg', name: 'Pegase' },
    { file: 'Calliope.jpg', name: 'Calliope' },
    { file: 'Thalie.jpg', name: 'Thalie' }
  ];

  constructor(private serv: RoomService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit() {
    //console.log(this.formRoom);
    this.serv.insert(this.formRoom.value as RoomModel).subscribe(
      data => {
        this.snack.open(`La salle ${data.name} est enregistrée avec l'id ${data.id}`, 'OK', { duration: 4000, verticalPosition: 'top' });
      },
      err => {
        this.snack.open(`Erreur lors de l'enregistrement: ${err.message}`, 'OK', { duration: 4000, verticalPosition: 'top' });
      }
    );
  }

}
