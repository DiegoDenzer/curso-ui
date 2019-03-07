import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent  {

  pessoas =[
    {
      nome: 'Diego',
      cidade: 'Araucaria',
      estado: 'PR',
      status: true
    },
    {
      nome: 'Diego',
      cidade: 'Araucaria',
      estado: 'PR',
      status: false
    },
    {
      nome: 'Denzer',
      cidade: 'mogi',
      estado: 'SP',
      status: true
    },
    {
      nome: 'Joao',
      cidade: 'paranavai',
      estado: 'PR',
      status: false
    }
  ];

  
}
