import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent {
  cliente:Cliente = new Cliente();
  constructor(
    private clienteService:ClienteService,
    private router:Router
  ){}

  salvar() {
    this.clienteService.saveCliente(this.cliente).subscribe(response =>{
      this.router.navigate(['clientes'])
    });
  }
}
