import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  address = [
    {
      addressType: "rua",
      addressName: "Josef",
      address: "Senhor Josef",
      district: "Pinheiros",
      zipCode: "02616020",
      city: "Saõ Paulo",
      state: "SP"
    },
    {
      addressType: "Avenida",
      addressName: "Boa morte",
      address: "Rua Boa morte",
      district: "Lapa",
      zipCode: "02616333",
      city: "Saõ Paulo",
      state: "SP"
    }
  ];
  title = {
    fontSize: 20,
    fontColor: "blue"
  }

}
