import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Postagem {
    public id: number
    public titulo : string
    public texto : string
    public foto: string
    public amei: boolean
    public fonte: string
    public dataP: Date
    public categoria: Categoria
    public usuario: Usuario
}