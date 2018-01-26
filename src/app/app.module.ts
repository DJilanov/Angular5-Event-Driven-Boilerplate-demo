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
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SugestionsPageComponent } from './suggestions-page/suggestions-page.component';

import { TranslateService } from './shared/translation/services/translate.service';
import { TranslateDirective } from './shared/translation/directives/translate.directive';

@NgModule({
	declarations: [
		AppComponent,
		DocsPageComponent,
		HomePageComponent,
		ContactPageComponent,
		SugestionsPageComponent
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
	providers: [
		CoreModule,
		SharedModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
