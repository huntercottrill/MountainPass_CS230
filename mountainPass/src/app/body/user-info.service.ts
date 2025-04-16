import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable({providedIn: 'root'})
export class UserInfoService {
    private baseUrl: string = "https://mountainpass-2c2f1-default-rtdb.firebaseio.com/";
    private myInfoEndpoint:string = 'User-Info.json';
    
    constructor(private http:HttpClient) {
    }

    getUserInfo() {
        console.log(this.baseUrl + this.myInfoEndpoint);
        return this.http.get<UserInfo>(this.baseUrl + this.myInfoEndpoint);
    }
}