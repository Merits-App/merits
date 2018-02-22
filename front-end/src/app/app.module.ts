import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SearchBarComponent } from './components/search/search-bar/search-bar.component';
import { SearchResultComponent } from './components/search/search-result/search-result.component';
import { NavbarComponent } from './components/profile/navbar/navbar.component';
import { AboutComponent } from './components/profile/about/about.component';
import { EducationComponent } from './components/profile/education/education.component';
import { ExperienceComponent } from './components/profile/experience/experience.component';
import { AchievementsComponent } from './components/profile/achievements/achievements.component';
import { ProjectsComponent } from './components/profile/projects/projects.component';
import { SkillsComponent } from './components/profile/skills/skills.component';
import { LoginComponent } from './components/home/login/login.component';
import { RegisterComponent } from './components/home/register/register.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { FooterComponent } from './components/home/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    SearchComponent,
    SearchBarComponent,
    SearchResultComponent,
    NavbarComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    AchievementsComponent,
    ProjectsComponent,
    SkillsComponent,
    LoginComponent,
    RegisterComponent,
    HeroComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
