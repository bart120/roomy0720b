import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../services/authentication.service';
import { UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {

    user: UserModel = null;

    constructor(private snack: MatSnackBar, private router: Router,
        private auth: AuthenticationService) {

        this.auth.user.subscribe(
            data => this.user = data
        );
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        //let user = sessionStorage.getItem('USER');
        //console.log(user);
        if (this.user == null) {
            this.snack.open(`Vous n'avez accès à cette page.`, 'OK');
            this.router.navigate(['/auth/login']);
            return false;
        }
        else
            return true;
    }
}
