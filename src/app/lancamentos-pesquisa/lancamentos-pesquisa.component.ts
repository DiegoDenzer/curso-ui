import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent  {

  lancamentos = [
    {
      descricao: 'Pagamento',
      pessoa: 'Diego',
      pagamento: new Date(2019, 2, 10),
      vencimento: new Date(2019, 2, 10),
      valor: 100.50,
      tipo: 'DESPESA'
    },
    {
      descricao: 'Bonus',
      pessoa: 'Denzer',
      pagamento: new Date(2029, 12,1),
      vencimento: new Date(2029, 12,1),
      valor: 1000,
      tipo: 'RECEITA'
    }
  ];

}
