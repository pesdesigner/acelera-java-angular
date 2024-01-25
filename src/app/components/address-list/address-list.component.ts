import { Component, Input, OnInit } from '@angular/core';
import { Endereco } from 'src/app/interfaces/Endereco';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  @Input() address: Endereco[] = [];

  style = {
    fontColor: "red",
    fontSize: "25px"
  }

  exibirEndereco: boolean = false;

  ngOnInit(): void {
    this.exibirEndereco = this.address.length > 0
  }

  classTitle = ["title-underline"];
}
