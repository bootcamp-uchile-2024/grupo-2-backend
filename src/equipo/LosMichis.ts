import { Persona } from "./Persona";


export class LosMichis {
    constructor(
        public nombre: string,
        public lidreGrupo: String,
        public participantes: Persona[],
        public subGrupo: string,

    ) { }
}