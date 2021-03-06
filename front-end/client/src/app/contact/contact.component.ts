import { Component, OnInit } from '@angular/core';

import { ContactService } from '../core/contact.service';
import { ContactGetModel } from '../models/contacts/contactGetModel';
import { animations } from '../shared/animations';

@Component({
  selector: 'stark-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [animations.routerTopAnimation],
  host: { '[@routerTopAnimation]': ''},
})
export class ContactComponent implements OnInit {
    public contacts: ContactGetModel[];
    public primaryAddress: ContactGetModel;
    public displayLongtitude: number;
    public displayLatitude: number;
    constructor(private contactService: ContactService) { }

    public ngOnInit(): void {
        this.contactService.getAllContacts().subscribe((data) => {
            this.contacts = data.allContacts;
            this.primaryAddress = data.primaryAddress;
            this.displayLongtitude = this.primaryAddress.longtitude;
            this.displayLatitude = this.primaryAddress.latitude;
        });
    }
    public mapIt(longtitude: number, latitude: number): void {
        this.displayLongtitude = longtitude;
        this.displayLatitude = latitude;
    }
}
