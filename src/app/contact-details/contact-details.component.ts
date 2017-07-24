import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  id: Number;
  contact: Contact;

  constructor(private route: ActivatedRoute,
              private contactService: ContactService,
              private location: Location) {
  }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => {
      const id = +params['id'];
      this.id = id;
      if (id === -1) {
        this.contact = new Contact();
      }
      return this.contactService.getContact(id);
    }).subscribe(contact => {
        if (contact) {
          this.contact = contact;
        }
      }
    );
  }

  onSubmit() {
    if (this.id === -1) {
      const contact = this.contact;

      this.contactService.getContacts().push({
        firstName: contact.firstName,
        lastName: contact.lastName,
        phone: contact.phone,
        email: contact.email
      });
    } else {
      this.contactService.getContact(this.id).update(this.contact);
    }
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
