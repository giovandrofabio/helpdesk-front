import { Component, OnInit } from '@angular/core';
import {Chamado} from "../../models/chamado";
import {Cliente} from "../../models/cliente";
import {Tecnico} from "../../models/tecnico";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.css']
})
export class ChamadoCreateComponent implements OnInit {

  chamado: Chamado = {
    prioridade:  '',
    status:      '',
    titulo:      '',
    observacoes: '',
    tecnico:     '',
    cliente:     '',
    nomeCliente: '',
    nomeTecnico: '',
  }

  clientes: Cliente[] = []
  tecnicos: Tecnico[] = []

  prioridade: FormControl = new FormControl(null, [Validators.required]);
  status:     FormControl = new FormControl(null, [Validators.required]);
  titulo:     FormControl = new FormControl(null, [Validators.required]);
  observacoes:FormControl = new FormControl(null, [Validators.required]);
  tecnico:    FormControl = new FormControl(null, [Validators.required]);
  cliente:    FormControl = new FormControl(null, [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.prioridade.valid && this.status.valid && this.titulo.valid
        && this.observacoes.valid && this.tecnico.valid && this.cliente.valid
  }
}
