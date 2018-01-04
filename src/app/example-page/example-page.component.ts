import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../core/backend/backend.service';
import { ErrorHandlerService } from '../core/error-handler/error-handler.service';
import { EventBusService } from '../core/event-bus/event-bus.service';

const sharredOptions = {};

@Component({
	selector: 'app-example-page',
	templateUrl: './example-page.component.html',
	styleUrls: ['./example-page.component.scss']
})
export class ExamplePageComponent {

	constructor(
		private router: Router,
		private backendService: BackendService,
		private eventBusService: EventBusService,
		private errorHandlerService: ErrorHandlerService
	) {
		this.eventBusService.emitChangeSharedOptions(sharredOptions);
	}
}
