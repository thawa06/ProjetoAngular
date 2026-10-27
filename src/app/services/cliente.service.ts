import { inject, Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private API = "http://localhost:3000/clientes";
  private clienteHTTP = inject(HttpClient);

  constructor() { }

  listar(): Observable<Cliente[]> {
    return this.clienteHTTP.get<Cliente[]>(this.API);
  }

  incluir(cliente:Cliente):Observable<Cliente>{
    return this.clienteHTTP.post<Cliente>(this.API, cliente);
  }

  excluir(id:string):Observable<void>{
    return this.clienteHTTP.delete<void>(`${this.API}/${id}`);
  constructor() { }

  listar(): Cliente[] {

    return [{
      id: 1,
      nome: "Thawã",
      sobrenome: "Luka",
      dataNascimento: "2007-02-06",
      email: "thawaluka06@gmail.com",
      cpf: "12452332211"
    }, 

    { id: 2,
      nome: "Luiza",
      sobrenome: "Antonella",
      dataNascimento: "2007-05-06",
      email: "luiza002@gmail.com",
      cpf: "12241214412"
    },

    { id: 3,
      nome: "Edson",
      sobrenome: "Pelé",
      dataNascimento: "1934-05-06",
      email: "pele10oreidosantos@gmail.com",
      cpf: "180025523312"
    },


  
  ]

  }
}
