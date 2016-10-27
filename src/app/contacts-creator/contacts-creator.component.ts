import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Contact} from '../models/contact';
import {ContactsService} from '../contacts.service';

@Component({
    selector: 'trm-contacts-creator',
    templateUrl: './contacts-creator.component.html',
    styleUrls: ['./contacts-creator.component.css']
})
export class ContactsCreatorComponent {

    constructor(
        private contactsService: ContactsService,
        private router: Router
    ) {}

    save(contact: Contact) {
        this.contactsService.addContact(contact)
            .subscribe(() => {
                this.router.navigate(['/']);
            });
    }

}
