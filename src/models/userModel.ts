export class UserModel {
    firstName: string
    lastName: string
    email: string
    password: string

    constructor(obj: UserModel) {
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.email = obj.email;
        this.password = obj.password;
    }
}