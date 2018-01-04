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

	constructor(
		private eventBusService: EventBusService,
	) {
		this.eventBusService.changeSharedOptions.subscribe((options) => this.updateSharedOptions(options));
	}

	updateSharedOptions(options) {
		this.search = options.search || false;
	}
}
