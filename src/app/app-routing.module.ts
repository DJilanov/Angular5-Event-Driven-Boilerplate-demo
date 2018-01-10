import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { SugestionsPageComponent } from './suggestions-page/suggestions-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DocsPageComponent } from './docs-page/docs-page.component';
import { ServerErrorPageComponent } from './feedback/server-error-page/server-error-page.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomePageComponent
	},
	{
		path: 'docs',
		component: DocsPageComponent
	},
	{
		path: 'style-guide-and-suggestions',
		component: SugestionsPageComponent
	},
	{
		path: 'about-me',
		component: ContactPageComponent
	},
	{
		path: 'server-error',
		component: ServerErrorPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
