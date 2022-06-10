import httpService from "./http.service";
import { InviteService } from "./invite.service";

import { ApiService } from "./api.service";
import { AuthService } from "./auth.service";
import { PlanServiceService } from "./planService.service";
import { UtilsService } from "./util.service";
import { EventTrackingService } from "./eventTracking.service";
import { HubspotService } from "./hubspot.service";

export const authService = new AuthService();
export const inviteService = new InviteService();
export const accountApiService = new ApiService("account");
export const userApiService = new ApiService("user");
export const inviteApiService = new ApiService("invite");
export const affiliateApiService = new ApiService("affiliate");
export const planServiceApiService = new ApiService("public/service");
export const contactApiService = new ApiService("public/contact");
export const demoApiService = new ApiService("public/demo");
export const businessTrialApiService = new ApiService("public/business-trial");
export const datacenterBetaApiService = new ApiService("public/early-access");
export const planServiceService = new PlanServiceService();
export const utilsService = new UtilsService();
export const eventTrackingService = new EventTrackingService();
export const hubspotService = new HubspotService();

export default {
	httpService,
	authService,
	accountApiService,
	userApiService,
	affiliateApiService,
	inviteService,
	inviteApiService,
	planServiceApiService,
	planServiceService,
	contactApiService,
	demoApiService,
	utilsService,
	eventTrackingService,
	businessTrialApiService,
	datacenterBetaApiService,
	hubspotService,
};
