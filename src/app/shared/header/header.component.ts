import { Component } from '@angular/core';

import { EventBusService } from '../../core/event-bus/event-bus.service';

const sharredOptions = {};

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	search = false;
	activeTab = 'home';

	constructor(
		private eventBusService: EventBusService,
	) {
		// TODO: Add listener to route or transfer info about the active tab via event bus
		this.eventBusService.changeSharedOptions.subscribe((options) => this.updateSharedOptions(options));
	}

	updateSharedOptions(options) {
		this.search = options.search || false;
	}

	makeActiveTab(tab) {
		this.activeTab = tab;
	}
}
