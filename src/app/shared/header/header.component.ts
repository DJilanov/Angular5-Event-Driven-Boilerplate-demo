import { Component } from '@angular/core';

import { EventBusService } from '../../core/event-bus/event-bus.service';

const sharredOptions = {};

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	constructor(
		private eventBusService: EventBusService,
	) {
		this.eventBusService.emitChangeSharedOptions(sharredOptions);
	}
}
