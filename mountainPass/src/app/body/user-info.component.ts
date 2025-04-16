import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserInfo } from './user-info.model';
import { UserInfoService } from './user-info.service';

@Injectable()
@Component({
    selector: "user-info",
    templateUrl: "user-info.component.html"
})
export class UserInfoComponent implements OnInit {
    myInfo: UserInfo | undefined;

    constructor(private userInfoService: UserInfoService) {
        //Constructor being called for first time 
    }
    ngOnInit(): void {
        console.log("Sending Request To serve");
        console.log("Registering showUserInfo as a subscriber");
        this.showUserInfo();
    }

    showUserInfo() {
        this.userInfoService.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}
