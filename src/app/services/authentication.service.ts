import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private subject: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(null);

    get user(): Observable<UserModel> {
        return this.subject.asObservable();
    }

    login(login: string, password: string): void {
        //appel serveur
        const user: UserModel = { login: login, name: login };
        sessionStorage.setItem('USER', JSON.stringify(user));

        this.subject.next(user);
    }

    logout(): void {
        sessionStorage.removeItem('USER');
        this.subject.next(null);
    }
}