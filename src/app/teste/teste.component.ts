import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent {
  textoBotao = 'Olá';
  corDeFundo = 'purple';

  mudarTexto() {
    switch (this.textoBotao) {
      case 'Olá':
        this.textoBotao = 'Boa Tarde';
        this.corDeFundo = 'green';
        break;
      case 'Boa Tarde':
        this.textoBotao = 'Bem-vindo';
        this.corDeFundo = 'orange';  
        break;
      default:
        this.textoBotao = 'Olá';
        this.corDeFundo = 'purple';
    }
  }
}
