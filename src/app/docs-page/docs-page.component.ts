import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../core/backend/backend.service';
import { ErrorHandlerService } from '../core/error-handler/error-handler.service';
import { EventBusService } from '../core/event-bus/event-bus.service';

const sharredOptions = {};

@Component({
	selector: 'app-docs-page',
	templateUrl: './docs-page.component.html',
	styleUrls: ['./docs-page.component.scss']
})
export class DocsPageComponent {

	constructor(
		private router: Router,
		private backendService: BackendService,
		private eventBusService: EventBusService,
		private errorHandlerService: ErrorHandlerService
	) {
		this.eventBusService.emitChangeSharedOptions(sharredOptions);
	}
}
