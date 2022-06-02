import { ExemploService } from './../exemplo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent {
  title: string = 'aula-inicial-angular teste';
  nomes: Array<string> = ['Douglas', 'Leila', 'Gabriel', 'Rafael'];
  valorAtual: number = 0;
  nomePessoa: string = '';
  placeHolder: string = 'Informe o seu nome';

  constructor(private exemploService: ExemploService) {
  }

  public obterHoraAtual(): number {
    return new Date().getHours();
  }

  public jaENoite(): boolean {
    return this.obterHoraAtual() > 18;
  }

  public jaETarde(): boolean {
    return this.obterHoraAtual() > 12 && this.obterHoraAtual() <= 18;
  }

  public jaEDia(): boolean {
    return this.obterHoraAtual() < 12;
  }

  public async aoClicarNoBotao(): Promise<void> {
    this.valorAtual++;
    const result = await this.exemploService.exemplo();
    console.log(result);
  }

}
