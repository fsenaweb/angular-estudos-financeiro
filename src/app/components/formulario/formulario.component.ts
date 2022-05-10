import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DadosProps } from '../home/home.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Input() tipo: string = 'saida';
  @Input() date: string = '';
  @Input() descricao: string = '';
  @Input() valor: number = 0;
  @Input() total: number = 0;
  @Input() result: DadosProps[] = [];

  @Output() dados: EventEmitter<DadosProps> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  inserirValor(): void {
    let value = { tipo: this.tipo, date: this.date, descricao: this.descricao, valor: this.valor }
    this.result.push(value)
    this.dados.emit(value);

    this.total = this.result.reduce( (prev, elem) => {
      return elem.tipo === 'entrada' ? prev + elem.valor : prev - elem.valor;
    }, 0 );

  }

}
