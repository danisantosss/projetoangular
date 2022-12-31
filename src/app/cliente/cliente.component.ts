import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  public listaClientes:Cliente[] = [];
  constructor(
    private clienteService:ClienteService
  ){}

  ngOnInit(): void{
    this.clienteService.getClientes().subscribe(response =>{
      this.listaClientes = response;
    })
  }
}
