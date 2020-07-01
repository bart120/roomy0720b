import { Routes } from '@angular/router';
import { ListRoomComponent } from './pages/rooms/list-room/list-room.component';
import { AddRoomComponent } from './pages/rooms/add-room/add-room.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NotFoundComponent } from './pages/home/not-found/not-found.component';
//import { LoginComponent } from './pages/authentication/login/login.component';
import { DetailRoomComponent } from './pages/rooms/detail-room/detail-room.component';

export const APP_ROUTES: Routes = [

    /*{ path: 'room/list', component: ListRoomComponent },
    { path: 'room/add', component: AddRoomComponent },*/

    {
        path: 'room', children: [
            { path: 'list', component: ListRoomComponent },
            { path: 'add', component: AddRoomComponent },
            { path: 'detail/:id', component: DetailRoomComponent }
        ]
    },

    { path: 'home', component: HomeComponent },
    { path: 'notfound', component: NotFoundComponent },

    //{ path: 'auth/login', component: LoginComponent },
    { path: 'auth', loadChildren: () => import('./pages/authentication/authentication.module').then(x => x.AuthenticationModule) },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'notfound' }

];