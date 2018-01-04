import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './services/services.module';
import { FeedbackModule } from './feedback/feedback.module';

import { AppComponent } from './app.component';
import { DocsPageComponent } from './docs-page/docs-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ExamplePageComponent } from './example-page/example-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
	declarations: [
		AppComponent,
		DocsPageComponent,
		HomePageComponent,
		ExamplePageComponent,
		ContactPageComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,

		CoreModule,
		SharedModule,
		ServicesModule,
		FeedbackModule,
	],
	providers: [CoreModule],
	bootstrap: [AppComponent]
})
export class AppModule { }
