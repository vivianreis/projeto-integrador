import { Categoria } from './Categoria';

export class Produto {
    public id: number;
    public preco: number;    
    public quantidade: number;
    public nome: string;
    public categoria: Categoria;
    public disponivel: boolean
        
}