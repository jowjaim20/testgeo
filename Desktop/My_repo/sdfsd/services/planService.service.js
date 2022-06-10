import ENV_CONFIG from "../shared/env";
import { planServiceApiService } from "./index";

export class PlanServiceService {
  constructor(path) {
    this.baseApi = `${ENV_CONFIG.apiUrl}/${path}`;
  }

  async getServices() {
    return planServiceApiService.get("").then(({ data }) => {
      return data.data;
    });
  }
}
