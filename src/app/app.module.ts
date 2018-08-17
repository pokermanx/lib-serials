import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {RouterModule} from '@angular/router';
import { appRoutes } from '../routers';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { TopPanelComponent } from './navigation/top-panel.component';
import { AddCardComponent } from './add-card/add-card.component';
import { FooterComponent } from './footer/footer.component';
import { AddNewPageComponent } from './add-new-page/add-new-page.component';
import { EditSerialComponent } from './edit-serial/edit-serial.component';
import { SerialInfoComponent } from './serial-detail/serial-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainContainerComponent,
    TopPanelComponent,
    AddCardComponent,
    FooterComponent,
    AddNewPageComponent,
    EditSerialComponent,
    SerialInfoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
