import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginUser, User} from "../../models/user";
import {LoginService} from "./login.service";
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
    selector: 'kiel-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    registerForm: FormGroup;
    showPassword = false;
    showConfPassword = false;
    selectedIndex = 0;
    showLoginPassword = false;
    loginForm: FormGroup;

    constructor(private fb: FormBuilder,
                private loginService: LoginService,
                private snackBar: MatSnackBar,
                private router: Router) {
    }

    ngOnInit() {
        this.createRegisterForm();
        this.createLoginForm();
    }

    createRegisterForm() {
        this.registerForm = this.fb.group({
            emailId: new FormControl("", [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required]),
            confirmPassword: new FormControl(null, [Validators.required]),
            firstName: new FormControl("", [Validators.required]),
            lastName: new FormControl("", [Validators.required]),
            phNo: new FormControl("", [Validators.minLength(10), Validators.maxLength(13)])
        })
    }

    createLoginForm() {
        this.loginForm = this.fb.group({
            userName: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required])
        })
    }


    registerUser() {
        const user: User = {
            firstName: this.registerForm.controls["firstName"].value,
            lastName: this.registerForm.controls["lastName"].value,
            email: this.registerForm.controls["emailId"].value,
            password: this.registerForm.controls["password"].value,
            phNo: this.registerForm.controls["phNo"].value,
            role: 'USER'
        };
        if (this.registerForm.valid) {
            this.loginService.registerUser(user).subscribe(res => {
                this.snackBar.open(res.message, res.code, {
                    duration: 5000
                });
                this.resetRegisterForm();
            }, (error) => {
                this.snackBar.open("There exists a problem while connecting to the server", "500", {
                    duration: 5000
                });
            })

        }

    }

    loginUser() {
        const loginUser: LoginUser = {
            userName: this.loginForm.controls['userName'].value,
            password: this.loginForm.controls['password'].value
        };
        if (this.loginForm.valid) {
            this.loginService.loginUser(loginUser).subscribe(res => {
                if (res.code === "200") {
                    localStorage.setItem("userName", res.userName);
                    localStorage.setItem("role", res.role);
                    localStorage.setItem("emailId", res.emailId);
                    this.router.navigate(['/'])
                    this.snackBar.open(res.message, res.code, {
                        duration: 4000
                    });
                    window.location.reload();
                }
            }, (error) => {
                this.snackBar.open("There exists a problem while connecting to the server", "", {
                    duration: 4000
                });
            }, () => {
                this.resetLoginForm();
            });
        }
    }


    get password() {
        return this.registerForm.controls['password'] as FormControl;
    }

    get confirmPassword() {
        return this.registerForm.controls['confirmPassword'] as FormControl;
    }

    resetRegisterForm() {
        this.registerForm.reset();
    }

    resetLoginForm() {
        this.loginForm.reset();
    }
}
