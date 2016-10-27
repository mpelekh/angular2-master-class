import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from  '@angular/http';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {ContactsAppComponent} from './contacts.component';
import {ContactsAppRoutes} from './app.routes';
import {ContactsDetailComponent} from './contacts-detail/contacts-detail.component';
import {ContactsHeaderComponent} from './contacts-header/contacts-header.component';
import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {ContactsService} from './contacts.service';
import {ContactsEditorComponent} from './contacts-editor/contacts-editor.component';
import {EventBusService} from './event-bus.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/switchMap';
import {ContactsDetailViewComponent} from './contacts-detail-view/contacts-detail-view.component';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';

@NgModule({
    declarations: [
        ContactsAppComponent,
        ContactsHeaderComponent,
        ContactsListComponent,
        ContactsDetailComponent,
        ContactsEditorComponent,
        ContactsDetailViewComponent,
        ContactsCreatorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ContactsAppRoutes)
    ],
    bootstrap: [
        ContactsAppComponent
    ],
    providers: [
        ContactsService,
        EventBusService,
        Title
    ]
})
export class ContactsModule {

}
