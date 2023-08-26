import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {


  pensamento: Pensamento = {

    conteudo: '',
    autoria: '',
    modelo: ''
  }

  //ngOnInit(): void{}

  constructor(
    private service : PensamentoService,
    private router: Router

    ){}

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(()=>{
      this.router.navigate(['/listarPensamento'])
    })
    alert("criado")
  }



  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
