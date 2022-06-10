import environment from "../shared/env";
import {accountApiService} from "./index";

export class AuthService {
    token;
    USER_KEY = 'USER';
    constructor(path) {
        this.baseApi  = `${environment.apiUrl}/${path}` ;
    }



    async getAccountData() {
        return accountApiService.get()
            .then(({data}) => {
                return data.data;
            })
    }

    updateLocalUserData(payload) {
        const user = JSON.parse(localStorage.getItem(this.USER_KEY));
        if (user) {
            const updated = {...user, ...payload};
            localStorage.setItem(this.USER_KEY, JSON.stringify(updated));
            Store.dispatch(changeUser(updated));
        }
    }


    async initCurrentUser() {
        const user = JSON.parse(localStorage.getItem(this.USER_KEY));

        if (user) {
           await this.loginHandler(user);
        }
    }

    getAccessToken() {
        if (this.token) return this.token;

        const user = JSON.parse(localStorage.getItem(this.USER_KEY));

        if (user) {
            this.token = user.token;
            return this.token;
        }

        return null;
    }
}
