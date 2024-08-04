import { Injectable } from '@nestjs/common';
import { Persona } from './Persona';
import { LosMichis } from './LosMichis';
import { texto } from './textoGeneral';

@Injectable()
export class EquipoService {


    private personas: Persona[] = [];
    private michis: LosMichis[] = [];

    constructor() {
        this.personas = [
            //UX/UI
            new Persona(1, 'Alejandra Pantoja', 'gmail', 'UxUi', 'Lider'),
            new Persona(2, 'Carolina Deck', 'gmail', 'UxUi', ''),
            new Persona(3, 'Marcela Díaz', 'gmail', 'UxUi', ''),
            new Persona(4, 'Sofía Pérez', 'gmail', 'UxUi', ''),
            new Persona(5, 'Paula Vivallos', 'gmail', 'UxUi', ''),

            //Frontend
            new Persona(6, 'Jorge Mulchi', 'gmail', 'Frontend', 'Lider'),
            new Persona(7, 'David Manríquez', 'gmail', 'Frontend', ''),
            new Persona(8, 'Carlos Vega', 'gmail', 'Frontend', ''),

            //Apps móviles:
            new Persona(9, 'Nicolás Núñez', 'gmail', 'AppMobile', 'Lider'),
            new Persona(10, 'Rodrigo Carrasco', 'gmail', 'AppMobile', ''),

            //Backend
            new Persona(11, 'Cindy da Silva', 'cindyluanadasilva@gmail.com', 'Backend', 'Lider'),
            new Persona(12, 'Andrés Fariña', 'gmail', 'Backend', ''),
            new Persona(13, 'Karla Reyes', 'gmail', 'Backend', ''),
            new Persona(14, 'Esteban Riquelme', 'gmail', 'Backend', ''),
        ];

        this.michis = [
            new LosMichis("Los Michis", " a definir", this.personas, "UxUi,Frontend,AppMobile,Backend")
        ]
    }


    //obtener equipo completo
    obtenerEquipo(): LosMichis[] {
        return this.michis;


    }

    // Obtener un usuario según subGrupo
    obtenerPorSubGrupo(subGrupo: string): Persona[] {
        const subGrupoLowerCase = subGrupo.toLowerCase();
        return this.personas.filter(persona => persona.subGrupo.toLowerCase() === subGrupoLowerCase);
    }


    //listaSubgrupos

    listaSubgrupos() {
        return `áreas:  UxUi: Alejandra Pantoja, Carolina Deck, Marcela Díaz, Sofía Pérez, Paula Vivallos.
                        Frontend: Jorge Mulchi, David Manríquez, Carlos Vega.
                        App Mobile: Nicolás Núñez, Rodrigo Carrasco.
                        Backend: Andrés Fariña, Karla Reyes, Esteban Riquelme, Cindy da Silva`;
    }

    //Datos ecommerce
    obtenerDatosGenerales(): string {
      
        return texto;

    }


}




