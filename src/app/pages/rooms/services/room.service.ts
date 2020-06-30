import { Injectable } from '@angular/core';
import { RoomModel } from '../../../models/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class RoomService {

    constructor(private http: HttpClient) { }

    getAllRooms(): Array<RoomModel> {
        /*return [
            { name: 'Pegase', image: 'Pegase.jpg' },
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Uranie', image: 'Uranie.jpg' }
        ];*/

        this.http.get(environment.urlRooms);


        return null;
    }
}