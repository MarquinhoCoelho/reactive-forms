import { UsuarioExisteService } from './usuario-existe.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioExisteService: UsuarioExisteService
    // private novoUsuarioService: NovoUsuarioService
  ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      fullName: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      userName: ['', [minusculoValidator], [this.usuarioExisteService.usuariojaExiste()]],
      password: ['']
    },
    {
      // validators: [usuarioSenhaIguaisValidator]
    }
    );
  }

  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);

  }

}
