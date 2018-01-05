import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../core/backend/backend.service';
import { ErrorHandlerService } from '../core/error-handler/error-handler.service';
import { EventBusService } from '../core/event-bus/event-bus.service';

const sharredOptions = {
	search: false
};

@Component({
	selector: 'app-components-page',
	templateUrl: './components-page.component.html',
	styleUrls: ['./components-page.component.scss']
})
export class ComponentsPageComponent {

	constructor(
		private router: Router,
		private backendService: BackendService,
		private eventBusService: EventBusService,
		private errorHandlerService: ErrorHandlerService
	) {
		this.eventBusService.emitChangeSharedOptions(sharredOptions);
	}
}
