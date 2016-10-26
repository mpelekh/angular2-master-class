import { Injectable } from '@angular/core';
import { Http } from  '@angular/http';

@Injectable()
export class ContactsService {

  private API_ENDPOINT = 'http://localhost:4201';
  private API_CONTACTS_PATH = '/api/contacts/';

  constructor(private http: Http) { }

  getContact(id: string) {
      return this.http.get(this.API_ENDPOINT + this.API_CONTACTS_PATH + id)
          .map(res => res.json())
          .map(data => data.item);
  }

  getContacts() {
    return this.http.get(this.API_ENDPOINT + this.API_CONTACTS_PATH)
      .map(res => res.json())
      .map(data => data.items);
  }

}
