import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FeedComponent,
    FeedItemComponent,
    BannerComponent,
    SettingsPageComponent,
    NewArticleComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FeedComponent,
    FeedItemComponent,
    BannerComponent,
    SettingsPageComponent,
    NewArticleComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class FeatureModule { }
