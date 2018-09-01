import {Routes , RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { ModulePageComponent } from './module-page/module-page.component';
import { QuizComponent } from './quiz/quiz.component';
export const router: Routes = [
{ path : '', component : AppComponent},
{ path: 'createquiz', component : CreateQuizComponent},
{ path: 'modules', component  : ModulePageComponent},
];
 export const routes: ModuleWithProviders = RouterModule.forRoot(router);
