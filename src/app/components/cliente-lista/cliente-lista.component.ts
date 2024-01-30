import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  public clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
      this.clienteService.getAll().subscribe({
        next: (result: Cliente[]) => {
          this.clientes = result
        },
        error: (error) => {
          console.error('falha ao carregar a lista', error.message)
        }
      })
  }

}
