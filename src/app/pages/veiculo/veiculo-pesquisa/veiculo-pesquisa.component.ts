import { Veiculo } from './../../../models/veiculo';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculo-pesquisa',
  templateUrl: './veiculo-pesquisa.component.html',
  styleUrls: ['./veiculo-pesquisa.component.scss']
})
export class VeiculoPesquisaComponent implements OnInit {
  public veiculos:Veiculo[] = [];
  public dataSource:MatTableDataSource<Veiculo> = new MatTableDataSource(this.veiculos);
  public displayedColumns:string[] = ['modelo','cor','ano','placa','valor','acoes'];

  constructor(private router:Router) { }

  ngOnInit(): void {
    let jsonUsers = localStorage.getItem('veiculos');
    if(jsonUsers != null){
      this.veiculos = JSON.parse(jsonUsers);
    }
    this.dataSource = new MatTableDataSource(this.veiculos);
  }

  public remover(veiculo){
    console.log('Removendo o veiculo',veiculo)
    let index = this.veiculos.indexOf(veiculo);
    this.veiculos.splice(index, 1);
    localStorage.setItem('veiculos',JSON.stringify(this.veiculos));
    this.dataSource = new MatTableDataSource(this.veiculos);
  }

  public alterar(veiculo){
    console.log('Alterando o veiculo',veiculo)
    this.router.navigate(['/veiculo/cadastro', veiculo]);
  }

}
