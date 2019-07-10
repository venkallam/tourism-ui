import {Component, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar} from "@angular/material";
import {FormComponent} from "../form/form.component";
import {Experience} from "../../models/experience";
import {ExperienceService} from "../../services/experience.service";
import {EditFormComponent} from "../edit-form/edit-form.component";

@Component({
    selector: 'kiel-cruise',
    templateUrl: './cruise.component.html',
    styleUrls: ['./cruise.component.scss']
})
export class CruiseComponent implements OnInit {

    constructor(private dialog: MatDialog,
                private cruiseService: ExperienceService,
                private snackBar: MatSnackBar) {
    }

    cruiseList: Experience[] = [];


    openForm(): void {
        const dialogRef = this.dialog.open(FormComponent, {
            data: {name: "cruise"},
            width: "500px"
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getExperiences();
        });
    }

    ngOnInit() {
        this.getExperiences();
    }

    getExperiences() {
        this.cruiseService.getExperiences("cruise").subscribe(response => {

            if (response.code === "200") {
                this.cruiseList = response.cruises;
                this.closeForm();
            }
        }, () => {
            this.snackBar.open("There exists a problem while connecting to the server. Sorry for the inconvenience", "500", {
                duration: 5000
            });
            this.cruiseList = [];
        });
    }

    closeForm() {
        this.dialog.closeAll();
    }

    get isAdmin() {
        return localStorage.getItem("role") === "ADMIN";
    }

    editCruise(cruise: Experience) {
        const dialogRef = this.dialog.open(EditFormComponent, {
            data: {name: "cruise", experience: cruise},
            width: "500px"
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.cruiseService.getExperiences("cruise").subscribe(response => this.cruiseList = response.cruises);
        });
    }


    deleteCruise(cruiseId) {
        this.cruiseService.deleteExperience("cruise", cruiseId).subscribe(response => {
            if (response.code === "200") {
                this.snackBar.open(response.message, response.code, {
                    duration: 5000
                });
                this.cruiseService.getExperiences("cruise").subscribe(response => this.cruiseList = response.cruises);
            }
        }, () => {
            this.snackBar.open("There exists a problem while connecting to the server. Sorry for the inconvenience", "500", {
                duration: 5000
            });
        });
    }
}
