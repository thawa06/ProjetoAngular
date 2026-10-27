import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  cliente:Cliente = {} as Cliente;
  private service = inject(ClienteService);
  private router = inject(Router);
  confirmarSenha:string = "";

  salvar() {

    if (this.cliente.senha !== this.confirmarSenha) {

  cliente = {
    cpf: '',
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  };

  cadastrar() {

    if (this.cliente.senha !== this.cliente.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }

    this.service.incluir(this.cliente).subscribe({
      next: (cliente)=>{
        this.cliente = cliente;
        alert("Cliente cadastrado com sucesso!");
        this.router.navigate(["/admin-clientes-listar"]);
      }
    })

  }//Fim do salvar
    alert(`Cliente ${this.cliente.nome} cadastrado com sucesso!`);

    console.log(this.cliente);

  }
}
