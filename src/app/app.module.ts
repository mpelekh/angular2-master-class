import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from  '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactsAppComponent } from './contacts.component';
import { ContactsAppRoutes } from './app.routes';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsService } from './contacts.service';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot(ContactsAppRoutes)
  ],
  bootstrap: [
    ContactsAppComponent
  ],
  providers: [
    ContactsService
  ]
})
export class ContactsModule {

}
