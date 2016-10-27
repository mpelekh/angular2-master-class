import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { Routes } from '@angular/router';

export const ContactsAppRoutes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contact/:id', component: ContactsDetailViewComponent },
  { path: 'contact/:id/edit', component: ContactsEditorComponent },
  { path: 'contacts/new', component: ContactsCreatorComponent }
];