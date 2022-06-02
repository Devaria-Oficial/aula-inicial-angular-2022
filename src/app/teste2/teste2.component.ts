import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teste2',
  templateUrl: './teste2.component.html',
  styleUrls: ['./teste2.component.css']
})
export class Teste2Component implements OnInit {

  nomeUrl: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.nomeUrl = params.nome;
    });
  }

  ngOnInit(): void {
  }

  parabenizar(idadeAtual: number) {
    alert('Parabéns! Você fez ' + idadeAtual + ' anos');
  }
}
