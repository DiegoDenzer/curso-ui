import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lancamentos = [
    {
      descricao: 'Pagamento',
      pessoa: 'Diego',
      pagamento: '10/09/2019',
      vencimento: '10/10/2019',
      valor: 100.50,
      tipo: 'DESPESA'
    },
    {
      descricao: 'Bonus',
      pessoa: 'Denzer',
      pagamento: '12/10/2029',
      vencimento: '10/10/2020',
      valor: 1000,
      tipo: 'RECEITA'
    }
  ];
}
