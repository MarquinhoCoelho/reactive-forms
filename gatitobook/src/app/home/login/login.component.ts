import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  senha: string = ''

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
      console.log('autenticado COM sucesso');
      this.router.navigate(['animais']);
    },
    (error) => {
      alert("usuário ou senha invalido");
      console.log(error);
    }
    );

  }

}
