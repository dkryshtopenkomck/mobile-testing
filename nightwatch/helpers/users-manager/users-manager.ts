import dotenv from "dotenv";
import _users from "./users.json";
import {find} from "lodash";
import {User} from "./user";

export class UserManager {
    private readonly users: User[];

    constructor() {
        dotenv.config();
        this.users = _users.map(user => new User(user));
    }

    findUser(signum: string): User | null {
        const user = find(this.users, { signum: signum.toUpperCase() });
        return user || null;
    }

    getUserCredentials(signum: string) {
        const user = this.findUser(signum);
        if (!user) {
            throw new Error(`User with signum "${signum}" not found!`);
        }
        console.log("Current user info: ", user.preferred_username, user.signum, user.host);
        return {
            email: user.preferred_username,
            signum: user.signum,
            host: user.host,
        };
    }
}
