import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseService} from "../../services/base-service";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient, private baseService: BaseService) {
    }

    fetchAllUsers(): Observable<any> {
        return this.http.get(this.baseService.getBaseUrl() + `/tourism/api/v1/users`);
    }
}
