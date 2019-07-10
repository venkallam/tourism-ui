import {Component, OnInit} from '@angular/core';
import {FormComponent} from "../form/form.component";
import {MatDialog, MatSnackBar} from "@angular/material";
import {ExperienceService} from "../../services/experience.service";
import {Experience} from "../../models/experience";
import {EditFormComponent} from "../edit-form/edit-form.component";

export interface Filter {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'kiel-cuisine',
    templateUrl: './cuisine.component.html',
    styleUrls: ['./cuisine.component.scss']
})
export class CuisineComponent implements OnInit {

    cuisineList: Experience[] = [];


    filterList: Filter[] = [
        {value: '10', viewValue: 'Enjoy'},
        {value: '50', viewValue: 'Party Hard'},
        {value: '100', viewValue: 'Bomblasting Party'}
    ];

    constructor(private dialog: MatDialog,
                private cuisineService: ExperienceService,
                private snackBar: MatSnackBar) {
    }

    openForm(): void {
        const dialogRef = this.dialog.open(FormComponent, {
            data: {name: "cuisine"},
            width: "500px"
        });

        dialogRef.afterClosed().subscribe(result => {
            this.getCuisines();
            console.log('The dialog was closed');
        });
    }

    ngOnInit() {
        this.getCuisines();
    }

    getCuisines() {
        this.cuisineService.getExperiences("cuisine").subscribe(response => {

            if (response.code === "200") {
                this.cuisineList = response.cuisines;
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

    editCuisine(cuisine: Experience) {
        const dialogRef = this.dialog.open(EditFormComponent, {
            data: {name: "cuisine", experience: cuisine},
            width: "500px"
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.cuisineService.getExperiences("cuisine").subscribe(response => this.cuisineList = response.cuisines);
        });
    }


    deleteCuisine(cuisineId) {
        this.cuisineService.deleteExperience("cuisine", cuisineId).subscribe(response => {
            if (response.code === "200") {
                this.snackBar.open(response.message, response.code, {
                    duration: 5000
                });
                this.cuisineService.getExperiences("cuisine").subscribe(response => this.cuisineList = response.cuisines);
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


    filterCuisines(value: any) {
        this.cuisineService.getFilteredExperiences("cuisine", value).subscribe(response => this.cuisineList = response.cuisines);
    }

}
