import {Component, OnInit} from '@angular/core';
import {Contact} from '../models/contact';
import {ContactsService} from '../contacts.service';
import {EventBusService} from '../event-bus.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'trm-contacts-list',
    templateUrl: './contacts-list.component.html',
    styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

    contacts: Observable<Array<Contact>>;
    private terms$ = new Subject<string>();

    constructor(
        private contactsService: ContactsService,
        private eventBusService: EventBusService
    ) {}

    ngOnInit() {

        this.eventBusService.emit('appTitleChange', 'Contacts');

        let initObservable = this.contactsService.getContacts();

        this.contacts = this.contactsService.search(this.terms$, 300)
            .merge(initObservable);

    }

}
