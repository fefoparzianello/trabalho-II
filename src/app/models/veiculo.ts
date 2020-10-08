import { AbstractEntity } from './abstractentity';

export class Veiculo extends AbstractEntity {
    public modelo:string;
    public cor:string;
    public ano:string;
    public placa:string;    
    public valor:string;
}