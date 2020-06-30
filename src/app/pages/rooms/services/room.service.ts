import { Injectable } from '@angular/core';
import { RoomModel } from '../../../models/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, timer } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

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

    getTopFive(): Observable<Array<RoomModel>> {

        return timer(0, 10000).pipe(
            mergeMap(
                () => this.http.get<Array<RoomModel>>(environment.urlRooms).pipe(
                    map(data => data.sort((a, b) => a.price < b.price ? 1 : -1).splice(0, 5))
                )
            )
        );

        let obsTimer = timer(0, 10000);

        let obsHttp = this.http.get<Array<RoomModel>>(environment.urlRooms).pipe(
            map(data => data.sort((a, b) => a.price < b.price ? 1 : -1).splice(0, 5))
        );

        let newObs = obsTimer.pipe(mergeMap(() => obsHttp));

        return newObs;
    }

    getById(id: number): Observable<RoomModel> {
        return this.http.get<RoomModel>(`${environment.urlRooms}/${id}`);
    }

    insert(room: RoomModel): Observable<RoomModel> {
        return this.http.post<RoomModel>(environment.urlRooms, room);
    }

    update(room: RoomModel): Observable<RoomModel> {
        return this.http.put<RoomModel>(`${environment.urlRooms}/${room.id}`, room);
    }

    delete(id: number): Observable<RoomModel> {
        return this.http.delete<RoomModel>(`${environment.urlRooms}/${id}`);
    }
}