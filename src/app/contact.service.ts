import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Contact} from './contact';

@Injectable()
export class ContactService {
  contacts: FirebaseListObservable<Contact[]>;

  constructor(private db: AngularFireDatabase) {
    this.contacts = db.list('/contacts');
  }

  getContacts(): FirebaseListObservable<Contact[]> {
    return this.contacts;
  }

  getContact(id): FirebaseObjectObservable<any> {
    const contact = this.db.object('/contacts/' + id);
    return contact;
  }

  removeContact(id): void {

  }
}
