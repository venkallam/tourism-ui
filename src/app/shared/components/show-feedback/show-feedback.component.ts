import {Component, OnInit} from '@angular/core';
import {FeedBackService} from "../../services/feed-back.service";
import {MatSnackBar} from "@angular/material";
import {FeedBack} from "../../models/feedBack";

@Component({
    selector: 'app-show-feedback',
    templateUrl: './show-feedback.component.html',
    styleUrls: ['./show-feedback.component.scss']
})
export class ShowFeedbackComponent implements OnInit {

    feedbacks: FeedBack[] = [];

    constructor(private feedbackService: FeedBackService,
                private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.feedbackService.getAllFeedbacks().subscribe(result => {
            if (result.code === "200") {
                this.feedbacks = result.feedbackResponses;
                this.snackBar.open(result.message, result.code, {
                    duration: 5000
                });
            }
        }, () => {
            this.snackBar.open("There exists a problem while connecting to the server", "500", {
                duration: 5000
            });
        });
    }

}
