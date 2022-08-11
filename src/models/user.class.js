import { ROLES } from "./roles.num";

export class User {
    username = "";
    email = "";
    password = "";
    role = ROLES.USER;

    constructor(username, password, email, role) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }
}
