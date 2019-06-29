import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";
import {User} from "../../models/user";
import {MatSnackBar} from "@angular/material";

@Component({
    selector: 'kiel-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


    users: User[] = [];

    constructor(private UsersService: UsersService,
                private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.UsersService.fetchAllUsers().subscribe(res => {
            if (res.code === "200") {
                this.users = res.users;
            }
            this.snackBar.open(res.message, res.code, {
                duration: 5000
            })
        }, () => {
            this.snackBar.open("There exists a problem while connecting to the server", "500", {
                duration: 5000
            });
        })
    }

    getUserBadge(userName) {
        let user = userName.split(" ");
        return user[0].charAt(0) + user[1].charAt(0);
        // return user[0][0]+user[1][0];
    }

}
