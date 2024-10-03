import { usuariocad } from "./usuariocad";

export interface Post {
    idpost: number; 
    usuario: usuariocad; 
    titulo: string; 
    nome_causa: string; 
    filtro_animal?: string; 
    filtro_raca?: string; 
    filtro_porte?: string; 
    filtro_causa?: string; 
    descricao: string; 
    chavepix?: string; 
    contato?: string; 
    status: number; 
}