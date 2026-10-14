import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

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
