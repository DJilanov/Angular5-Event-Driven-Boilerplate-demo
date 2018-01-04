import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

/**
 * @EventBusService used for connections between modules
 */
export class EventBusService {

	public requestError: EventEmitter<any>;
	public changeSharedOptions: EventEmitter<any>;

	constructor() {
		this.requestError = new EventEmitter();
		this.changeSharedOptions = new EventEmitter();
	}

	public emitRequestError(data) {
		this.requestError.emit(data);
	}
	
	public emitChangeSharedOptions(data) {
		this.changeSharedOptions.emit(data);
	}
}
