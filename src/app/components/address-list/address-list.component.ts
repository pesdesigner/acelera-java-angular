import { Component, Input } from '@angular/core';

type address = {
  addressType: string
  addressName: string
  address: string
  district: string
  zipCode: string
  city: string
  state: string
}

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent {
  @Input() address: address[] = [];
  classTitle = ["title-underline"];
}
