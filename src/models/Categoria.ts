import Usuario from './Usuario';

export default interface Categoria{
  id: number;
  titulo: string;
  texto: string;
  data: string;
  usuario: Usuario | null;
  descricao: string;
}