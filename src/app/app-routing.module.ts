import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ExamplePageComponent } from './example-page/example-page.component';
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
		path: 'example',
		component: ExamplePageComponent
	},
	{
		path: 'contact',
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
