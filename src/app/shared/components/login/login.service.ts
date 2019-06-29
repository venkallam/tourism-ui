import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginUser, User} from "../../models/user";
import {BaseService} from "../../services/base-service";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient, private baseService: BaseService) {

    }

    registerUser(user: User): Observable<any> {
        return this.http.post(this.baseService.getBaseUrl() + `/tourism/api/v1/register`, user);
    }

    loginUser(loginUser: LoginUser): Observable<any> {
        return this.http.post(this.baseService.getBaseUrl() + `/tourism/api/v1/login`, loginUser);
    }

}
