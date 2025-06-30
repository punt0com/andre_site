import { Routes } from '@angular/router';
import { ContentComponent } from './Components/content/content.component';
import { PresentationComponent } from './Components/presentation/presentation.component';

export const routes: Routes = [

    { path: '', component: ContentComponent },
    { path: 'test', component: ContentComponent },
    { path: 'presentation', component: PresentationComponent },
];
