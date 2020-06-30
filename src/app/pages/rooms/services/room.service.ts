import { Injectable } from '@angular/core';
import { RoomModel } from '../../../models/room.model';

@Injectable({ providedIn: 'root' })
export class RoomService {

    getAllRooms(): Array<RoomModel> {
        return [
            { name: 'Pegase', image: 'Pegase.jpg' },
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Uranie', image: 'Uranie.jpg' }
        ];
    }

}