import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {

  contact: Contact;

  constructor(
      private contactsService: ContactsService,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService
        .getContact(id)
        .subscribe(contact => this.contact = contact);
  }

}
