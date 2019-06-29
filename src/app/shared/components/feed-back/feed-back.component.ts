import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FeedBack} from "../../models/feedBack";
import {FeedBackService} from "../../services/feed-back.service";
import {MatDialogRef, MatSnackBar} from "@angular/material";

@Component({
    selector: 'kiel-feed-back',
    templateUrl: './feed-back.component.html',
    styleUrls: ['./feed-back.component.scss']
})
export class FeedBackComponent implements OnInit {

    feedBackForm: FormGroup;

    constructor(private fb: FormBuilder,
                private feedBackService: FeedBackService,
                private snackBar: MatSnackBar,
                private dialogRef: MatDialogRef<FeedBackComponent>) {
    }

    ngOnInit() {
        this.createFeedBackForm();
    }

    createFeedBackForm() {
        this.feedBackForm = this.fb.group({
            emailId: new FormControl(null, [Validators.required, Validators.email]),
            fullName: new FormControl(null, [Validators.required]),
            message: new FormControl(null, [Validators.required]),
            subject: new FormControl(null, [Validators.required])
        });
    }

    submitFeedBack() {
        const feedBack: FeedBack = {
            email: this.feedBackForm.controls["email"].value,
            fullName: this.feedBackForm.controls["fullName"].value,
            message: this.feedBackForm.controls["message"].value,
            subject: this.feedBackForm.controls["subject"].value
        }

        if (this.feedBackForm.valid) {
            this.feedBackService.submitFeedBack(feedBack).subscribe(res => {
                this.snackBar.open(res.message, res.code, {
                    duration: 5000
                })
            }, () => {
                this.snackBar.open("There exists a problem while connecting to the server", "500", {
                    duration: 5000
                });
            })
        }
    }

    resetFeedBackForm() {
        this.feedBackForm.reset();
    }

    closeFeedbackForm() {
        this.dialogRef.close();
    }
}
