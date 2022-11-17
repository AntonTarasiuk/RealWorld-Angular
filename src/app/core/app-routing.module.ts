import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPageComponent } from '../feature/settings-page/settings-page.component';
import { FeedComponent } from '../feature/feed/feed.component';
import { NewArticleComponent } from '../feature/new-article/new-article.component';
import { LoginComponent } from '../feature/login/login.component';
import { RegisterComponent } from '../feature/register/register.component';

const routes: Routes = [
  { path: 'home', component: FeedComponent },
  { path: 'new-article', component: NewArticleComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'home'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
