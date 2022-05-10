import {Component, Input, OnInit} from '@angular/core';

export type DadosProps = {
  date: string
  descricao: string
  valor: number
  tipo: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() result: DadosProps[] = []
  @Input() entradas: DadosProps[] = []
  @Input() saidas: DadosProps[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onResult(value: DadosProps): void {
    if(value.tipo === 'saida') this.saidas.push(value)
    if(value.tipo === 'entrada') this.entradas.push(value)
    this.result.push(value)
  }

}
