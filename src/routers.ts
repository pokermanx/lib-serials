import {Routes} from '@angular/router';

import { AddNewPageComponent } from './app/add-new-page/add-new-page.component';
import { EditSerialComponent } from './app/edit-serial/edit-serial.component';
import { SerialInfoComponent } from './app/serial-info/serial-info.component';
import { MainContainerComponent } from './app/main-container/main-container.component';

export const appRoutes: Routes =[
    { path: 'serials', component: MainContainerComponent},
    { path: 'add', component: AddNewPageComponent},
    { path: 'edit', component: EditSerialComponent},
    { path: 'info', component: SerialInfoComponent },
    { path: '', redirectTo: '/serials', pathMatch: 'full' }
  ];