import ENV_CONFIG from "../shared/env";
import {inviteApiService} from "./index";

export class InviteService {
    constructor(path) {
        this.baseApi  = `${ENV_CONFIG.apiUrl}/${path}` ;
    }

    async redirectById(id, params = {}) {
        return inviteApiService.get(`/${id}`, params)
            .then(({data}) => {
                return data.data;
            })
    }

}
