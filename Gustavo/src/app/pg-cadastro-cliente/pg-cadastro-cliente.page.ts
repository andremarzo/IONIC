import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { SClienteService } from '../services/s-cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../models/Cliente';


@Component({
  selector: 'app-pg-cadastro-cliente',
  templateUrl: './pg-cadastro-cliente.page.html',
  styleUrls: ['./pg-cadastro-cliente.page.scss'],
})
export class PgCadastroClientePage implements OnInit {

  formCliente: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private clienteservice: SClienteService,
    private router: Router) { }

  ngOnInit(): void {
    this.formCliente = this.formBuilder.group({
      nome: [
        '', // parametro responsável pelo valor(conteúdo do campo), caso adicione um valor será exibido no input
        [
          Validators.required, // validação de campo requerido
          Validators.minLength(4), // validação de valor minimo de caracteres
          Validators.maxLength(150), // validação de valor maximo de caracteres
          Validators.pattern(/^[a-zA-Z]+$/) // validação de tipo de caracteres (somente aceita letras minusculas e maiusculas)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email // validação de email
        ]
      ],
      senha: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(255),
          //Validators.pattern(/^[a-zA-Z]+$/) teria que ter esta validação na vida real.
        ]
      ],
      endereco: [
        '', // parametro responsável pelo valor(conteúdo do campo), caso adicione um valor será exibido no input
        [
          Validators.required, // validação de campo requerido

        ]
      ]

    });
  }

  adcCliente() {
    const novoCliente = this.formCliente.getRawValue() as Cliente;
    
    this.clienteservice.addCliente(novoCliente).subscribe(() => this.router.navigateByUrl("/cadastro-sucesso"),
      error => {
        console.log(error);
        this.formCliente.reset();        
      }
    )
  }
}

