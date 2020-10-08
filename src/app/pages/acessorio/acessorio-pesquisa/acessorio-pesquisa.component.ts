import { Acessorio } from './../../../models/acessorio';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acessorio-pesquisa',
  templateUrl: './acessorio-pesquisa.component.html',
  styleUrls: ['./acessorio-pesquisa.component.scss']
})
export class AcessorioPesquisaComponent implements OnInit {
  public acessorios:Acessorio[] = [];
  public dataSource:MatTableDataSource<Acessorio> = new MatTableDataSource(this.acessorios);
  public displayedColumns:string[] = ['nome','valor','cor','detalhes','acoes'];

  constructor(private router:Router) { }

  ngOnInit(): void {
    let jsonUsers = localStorage.getItem('acessorios');
    if(jsonUsers != null){
      this.acessorios = JSON.parse(jsonUsers);
    }
    this.dataSource = new MatTableDataSource(this.acessorios);
  }

  public remover(acessorio){
    console.log('Removendo o acessorio',acessorio)
    let index = this.acessorios.indexOf(acessorio);
    this.acessorios.splice(index, 1);
    localStorage.setItem('acessorios',JSON.stringify(this.acessorios));
    this.dataSource = new MatTableDataSource(this.acessorios);
  }

  public alterar(acessorio){
    console.log('Alterando o acessorio',acessorio)
    this.router.navigate(['/acessorio/cadastro', acessorio]);
  }

}
