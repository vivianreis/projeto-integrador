import { Produto } from './Produto';

export class Categoria {
    public id: number;
    public nome: string;
    public setor: string;
    public produto: Produto[];
}