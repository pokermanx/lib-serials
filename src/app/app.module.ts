import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }      from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routers';
import { DataService } from './services/data.service';
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
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './shared/auth.service';


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
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, "lib-serials-c8bf7"),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
