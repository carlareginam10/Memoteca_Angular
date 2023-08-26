import { Component } from '@angular/core';
import { Pensamento } from './../pensamento/pensamento';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
}

constructor(
  private service: PensamentoService,
  private router: Router,
  private route: ActivatedRoute
) { }


ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id')
  this.service.burcarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
  })
}

excluirPensamento() {
  if(this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
          this.router.navigate(['/listarPensamento'])
      })
  }
}

cancelar(){
  this.router.navigate(['/listarPensamento'])
}

}
