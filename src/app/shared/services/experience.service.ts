import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Experience} from "../models/experience";
import {BaseService} from "./base-service";

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    constructor(private http: HttpClient, private baseService: BaseService) {
    }

    addExperience(type: string, experience: Experience): Observable<any> {
        return this.http.post(this.baseService.getBaseUrl() + `/tourism/api/v1/${type}`, experience);
    }

    getExperiences(type: string): Observable<any> {
        console.log("type", type);
        return this.http.get(this.baseService.getBaseUrl() + `/tourism/api/v1/${type}`);
    }

    deleteExperience(type: string, cruiseId: string): Observable<any> {
        return this.http.delete(this.baseService.getBaseUrl() + `/tourism/api/v1/${type}/${cruiseId}`);
    }

    getFilteredExperiences(type: string, value: any): Observable<any> {
        return this.http.get(this.baseService.getBaseUrl() + `/tourism/api/v1/${type}`, {
            params: {
                filter: value
            }
        });
    }
}
