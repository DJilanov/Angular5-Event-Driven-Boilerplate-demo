/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SugestionsPageComponent } from './suggestions-page.component';

describe('SugestionsPageComponent', () => {
	let component: SugestionsPageComponent;
	let fixture: ComponentFixture<SugestionsPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SugestionsPageComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SugestionsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
