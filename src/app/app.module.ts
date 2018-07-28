import { routes } from './app.routes';
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
import {MatTableModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EnrolledusersComponent } from './enrolledusers/enrolledusers.component';
import { FormsModule } from '@angular/forms';
import { ScoresComponent } from './scores/scores.component';
import { AllGamesComponent } from './all-games/all-games.component';
import { AllIntroComponent } from './all-intro/all-intro.component';
import { AllQuizComponent } from './all-quiz/all-quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from './serverService';
import {
  HttpModule
} from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import {
  Http,
  Headers,
  Response
} from '@angular/http';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
// #################
import { PanelheaderComponent } from './panel/panelheader/panelheader.component';
import { PanelcourseComponent } from './panel/panelcourse/panelcourse.component';
import { PanelscoreComponent } from './panel/panelscore/panelscore.component';
import { PanelenrolleComponent } from './panel/panelenrolle/panelenrolle.component';
import { PanelgameComponent } from './panel/panelgame/panelgame.component';
import { PanelquizComponent } from './panel/panelquiz/panelquiz.component';
import { PanelintroComponent } from './panel/panelintro/panelintro.component';
import { PaneluserComponent } from './panel/paneluser/paneluser.component';

export const router: Routes = [
  { path: 'home', component: HomeComponent},
  // { path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent },
  // { path: '', component: HomeComponent },
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
  // ################
  {path: 'panelheader', component: PanelheaderComponent},
  {path: 'panelcourse', component: PanelcourseComponent },
  {path: 'panelscore', component: PanelscoreComponent },
  {path: 'panelenrolle', component: PanelenrolleComponent },
  {path: 'panelgame', component: PanelgameComponent },
  {path: 'panelintro', component: PanelintroComponent },
  {path: 'panelquiz', component: PanelquizComponent},
  {path: 'paneluser', component: PaneluserComponent },
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
    // ###########
    PanelheaderComponent,
    PanelcourseComponent,
    PanelscoreComponent,
    PanelenrolleComponent,
    PanelgameComponent,
    PanelquizComponent,
    PanelintroComponent,
    PaneluserComponent,
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
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})

export class AppModule {}
