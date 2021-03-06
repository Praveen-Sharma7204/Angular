import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModulePageComponent } from './module-page/module-page.component';
import { LinkingPageComponent } from './linking-page/linking-page.component';
import { CurrentModuleComponent } from './current-module/current-module.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { MatTableModule} from '@angular/material';
import { MatPaginatorModule} from '@angular/material/paginator';
import { EnrolledusersComponent } from './enrolledusers/enrolledusers.component';
import { FormsModule } from '@angular/forms';
import { ScoresComponent } from './scores/scores.component';
import { AllGamesComponent } from './all-games/all-games.component';
import { AllIntroComponent } from './all-intro/all-intro.component';
import { AllQuizComponent } from './all-quiz/all-quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from './serverService';
import { HttpModule } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import {
  Http,
  Headers,
  Response
} from '@angular/http';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddMainQuizComponent } from './add-main-quiz/add-main-quiz.component';

export const router: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  // { path: '', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'createquiz', component: CreateQuizComponent },
  { path: 'module', component: ModulePageComponent },
  // { path: 'course-intro', component: CourseIntroComponent},
  { path: 'linking', component: LinkingPageComponent },
  { path: 'currentmodule', component: CurrentModuleComponent },
  { path: 'users', component: UsersComponent },
  { path: 'enrolled', component: EnrolledusersComponent},
  { path: 'scores', component: ScoresComponent},
  { path: 'allgames', component: AllGamesComponent},
  { path: 'allintro', component: AllIntroComponent},
  { path: 'allquiz', component: AllQuizComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'quizpage', component: QuizPageComponent},
  { path: 'addquestion', component: AddQuestionComponent},
  { path: 'add-main-quiz', component: AddMainQuizComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateQuizComponent,
    HomeComponent,
    ModulePageComponent,
    LinkingPageComponent,
    CurrentModuleComponent,
    UsersComponent,
    EnrolledusersComponent,
    ScoresComponent,
    AllGamesComponent,
    AllIntroComponent,
    AllQuizComponent,
    LoginComponent,
    HeaderComponent,
    QuizComponent,
    QuizPageComponent,
    AddQuestionComponent,
    AddMainQuizComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(router),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [ServerService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})

export class AppModule {}
