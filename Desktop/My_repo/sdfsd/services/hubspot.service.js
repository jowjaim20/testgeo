export class HubspotService {
	constructor() {}

	openWidget() {
		window.HubSpotConversations.widget.open();
	}
}
