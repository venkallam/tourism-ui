import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) {
    }

    fetchAllUsers(): Observable<any> {
        return this.http.get(`/tourism/api/v1/users`);
    }
}
