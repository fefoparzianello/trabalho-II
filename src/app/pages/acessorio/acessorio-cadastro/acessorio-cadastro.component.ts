import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Acessorio } from './../../../models/acessorio';

@Component({
  selector: 'app-acessorio-cadastro',
  templateUrl: './acessorio-cadastro.component.html',
  styleUrls: ['./acessorio-cadastro.component.scss']
})
export class AcessorioCadastroComponent implements OnInit {

  public acessorio:Acessorio = new Acessorio();
  public form:FormGroup = new FormGroup({
    nome:new FormControl(''),
    valor:new FormControl(''),
    cor:new FormControl(''),
    detalhes:new FormControl('')
  })
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) =>{
      console.log(params);
      this.acessorio = params as Acessorio;
      this.form.patchValue(this.acessorio);
    })
  }

  public salvar(){
    if(this.form.invalid){
      alert('Campos invalidos!');
      return;
    }
    this.acessorio = this.form.value;
    console.log('Acessorio', this.acessorio);
    let jsonUsers = localStorage.getItem('acessorios');
    let acessorios:Acessorio[] = [] 
    if (jsonUsers != null){
      acessorios = JSON.parse(jsonUsers);
    }
    acessorios.push(this.acessorio);
    localStorage.setItem('acessorios', JSON.stringify(acessorios));
    console.table(acessorios);
    alert('Salvo com Sucesso');
    this.form.reset();
  }

}