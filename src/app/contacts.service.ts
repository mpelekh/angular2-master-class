import {Injectable} from '@angular/core';
import {Http} from  '@angular/http';
import {Contact} from './models/contact';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContactsService {

    private API_ENDPOINT = 'http://localhost:4201';
    private API_CONTACTS_PATH = '/api/contacts/';
    private API_SEARCH_PATH = '/api/search?text=';

    constructor(private http: Http) {
    }

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

    updateContact(contact: Contact) {
        let url = this.API_ENDPOINT + this.API_CONTACTS_PATH + contact.id;
        return this.http.put(url, contact);
    }

    rawSearch(term: string) {
        return this.http.get(this.API_ENDPOINT + this.API_SEARCH_PATH + term)
            .map(res => res.json())
            .map(data => data.items);
    }

    search(terms: Observable<string>, debounceMs = 400) {
        return terms.debounceTime(debounceMs)
            .distinctUntilChanged()
            .switchMap((term) => this.rawSearch(term));
    }

}
