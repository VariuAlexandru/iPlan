import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {NgIconsModule} from "@ng-icons/core";
import {
  heroCalendar,
  heroHome,
  heroPlus,
  heroBars3,
  heroChartBar,
  heroRocketLaunch,
  heroCheck,
  heroUserGroup,
  heroBookOpen
} from '@ng-icons/heroicons/outline';

import {
ionFastFoodOutline,
  ionBarbellOutline
} from '@ng-icons/ionicons';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons(
      {
        heroCalendar, heroPlus, heroHome, heroBars3,   heroUserGroup,
        heroBookOpen,
        heroChartBar, heroRocketLaunch, heroCheck,
        ionBarbellOutline,ionFastFoodOutline
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
