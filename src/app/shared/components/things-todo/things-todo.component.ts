import {Component, OnInit} from '@angular/core';
import {Experience} from "../../models/experience";
import {MatDialog, MatSnackBar} from "@angular/material";
import {ExperienceService} from "../../services/experience.service";
import {FormComponent} from "../form/form.component";
import {EditFormComponent} from "../edit-form/edit-form.component";

export interface Filter {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'kiel-things-todo',
    templateUrl: './things-todo.component.html',
    styleUrls: ['./things-todo.component.scss']
})
export class ThingsTodoComponent implements OnInit {

    thingsToDoList: Experience[] = [];

    filterList: Filter[] = [
        {value: '10', viewValue: 'Am Single '},
        {value: '50', viewValue: 'With Friends'},
        {value: '100', viewValue: 'With Girlfriend'}
    ];

    constructor(private dialog: MatDialog,
                private thingToService: ExperienceService,
                private snackBar: MatSnackBar) {
    }

    openForm(): void {
        const dialogRef = this.dialog.open(FormComponent, {
            data: {name: "Things To Do"},
            width: "500px"
        });

        dialogRef.afterClosed().subscribe(result => {
            this.getThings();
            console.log('The dialog was closed');
        });
    }

    ngOnInit() {
        this.getThings();
    }

    getThings() {
        this.thingToService.getExperiences("thingsToDo").subscribe(response => {

            if (response.code === "200") {
                this.thingsToDoList = response.thingsToDo;
                this.closeForm();
            }
        }, () => {
            this.snackBar.open("There exists a problem while connecting to the server. Sorry for the inconvenience", "500", {
                duration: 5000
            });
        });
    }

    closeForm() {
        this.dialog.closeAll();
    }

    editThing(thingsToDo: Experience) {
        const dialogRef = this.dialog.open(EditFormComponent, {
            data: {name: "thingsToDo", experience: thingsToDo},
            width: "500px"
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.thingToService.getExperiences("thingsToDo").subscribe(response => this.thingsToDoList = response.thingsToDo);
        });
    }


    deleteThing(thingId) {
        this.thingToService.deleteExperience("thingsToDo", thingId).subscribe(response => {
            if (response.code === "200") {
                this.snackBar.open(response.message, response.code, {
                    duration: 5000
                });
                this.thingToService.getExperiences("thingsToDo").subscribe(response => this.thingsToDoList = response.thingsToDo);
            }
        }, () => {
            this.snackBar.open("There exists a problem while connecting to the server. Sorry for the inconvenience", "500", {
                duration: 5000
            });
        });
    }

    get isAdmin() {
        return localStorage.getItem("role") === "ADMIN";
    }

    filterThings(value: any) {
        this.thingToService.getFilteredExperiences("thingsToDo", value).subscribe(response => this.thingsToDoList = response.thingsToDo);
    }
}
