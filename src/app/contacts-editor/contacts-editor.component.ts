import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  contact: Contact = <Contact> { address: {} };
  id;

  constructor(
      private contactsService: ContactsService,
      private route: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.contactsService
        .getContact(this.id)
        .subscribe(contact => this.contact = contact);
  }

  cancel(contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }

  save(contact: Contact) {
    this.contactsService
        .updateContact(contact)
        .subscribe(() => {
              this.router.navigate(['/contact', contact.id]);
        });
    }

}
