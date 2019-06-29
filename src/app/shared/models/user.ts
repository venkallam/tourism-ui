export interface User {
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    phNo: String;
    role: String;
    userName?: String;
    userId?: String;
}

export interface LoginUser {
    userName: String;
    password: String;
}
