import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

/**
 * @EventBusService used for connections between modules
 */
export class EventBusService {

	public changeRoute: EventEmitter<any>;
	public requestError: EventEmitter<any>;
	public changeSharedOptions: EventEmitter<any>;

	constructor() {
		this.changeRoute = new EventEmitter();
		this.requestError = new EventEmitter();
		this.changeSharedOptions = new EventEmitter();
	}
	
	public emitChangeRoute(data) {
		this.changeRoute.emit(data);
	}

	public emitRequestError(data) {
		this.requestError.emit(data);
	}
	
	public emitChangeSharedOptions(data) {
		this.changeSharedOptions.emit(data);
	}
}
