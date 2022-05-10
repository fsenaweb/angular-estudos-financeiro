import { Component, OnInit, Input } from '@angular/core';

import {DadosProps} from "./../../components/home/home.component";

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.scss']
})

export class InformacoesComponent implements OnInit {

  @Input() dados: DadosProps[] = []
  @Input() entradas: DadosProps[] = []
  @Input() saidas: DadosProps[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
