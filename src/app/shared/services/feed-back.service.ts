import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FeedBack} from "../models/feedBack";
import {Observable} from "rxjs";
import {BaseService} from "./base-service";

@Injectable({
    providedIn: 'root'
})
export class FeedBackService {

    constructor(private http: HttpClient, private baseService: BaseService) {
    }

    submitFeedBack(feedBack: FeedBack): Observable<any> {
        return this.http.post(this.baseService.getBaseUrl() + `/tourism/api/v1/feedback`, feedBack);
    }

    getAllFeedbacks(): Observable<any> {
        return this.http.get(this.baseService.getBaseUrl() + `/tourism/api/v1/feedback`);
    }
}
