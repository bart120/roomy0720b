import { Injectable } from '@angular/core';
import { RoomModel } from '../../../models/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoomService {

    constructor(private http: HttpClient) { }

    getAllRooms(): Observable<Array<RoomModel>> {
        /*return [
            { name: 'Pegase', image: 'Pegase.jpg' },
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Uranie', image: 'Uranie.jpg' }
        ];*/

        /*this.http.get<Array<RoomModel>>(environment.urlRooms).subscribe(
            data => {
                console.log(data);
                return data;
            });*/

        return this.http.get<Array<RoomModel>>(environment.urlRooms);

        //console.log('return null');
        //return null;
    }
}