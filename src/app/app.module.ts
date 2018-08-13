import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { AddCardComponent } from './add-card/add-card.component';
import { FooterComponent } from './footer/footer.component';
import { AddNewPageComponent } from './add-new-page/add-new-page.component';
import { EditSerialComponent } from './edit-serial/edit-serial.component';
import { SerialInfoComponent } from './serial-info/serial-info.component';

const appRoutes: Routes =[
  { path: '', component: MainContainerComponent},
  { path: 'add', component: AddNewPageComponent},
  { path: 'edit', component: EditSerialComponent},
  { path: 'info', component: SerialInfoComponent }
];

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
    SerialInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
