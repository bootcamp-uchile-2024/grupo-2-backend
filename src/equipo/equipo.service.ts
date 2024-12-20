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
            
            new Persona(1, 'Alejandra Pantoja', 'pantoja.ale@gmail.com', 'UxUi', 'Lider'),
            new Persona(2, 'Carolina Deck', 'deckcarolina@gmail.com', 'UxUi', ''),
            new Persona(3, 'Marcela Díaz', 'marcelaalejandradc@gmail.com', 'UxUi', ''),
            new Persona(4, 'Sofía Pérez', 'sofiperezxvii@gmail.com', 'UxUi', ''),
            new Persona(5, 'Paula Vivallos', 'vivallospaula@gmail.com', 'UxUi', ''),

            
            new Persona(6, 'Jorge Mulchi', 'jorge.mulchi@gmail.com', 'Frontend', 'Lider'),
            new Persona(7, 'David Manríquez', 'david.mankekez@gmail.com', 'Frontend', ''),
            new Persona(8, 'Carlos Vega', 'calvegh@gmail.com', 'Frontend', ''),

            
            new Persona(9, 'Nicolás Núñez', 'jnicolasnunezm@gmail.com', 'AppMobile', 'Lider'),
            new Persona(10, 'Rodrigo Carrasco', 'rodrigo.carrasco.ra@gmail.com', 'AppMobile', ''),

            
            new Persona(11, 'Cindy da Silva', 'cindyluanadasilva@gmail.com', 'Backend', 'Lider'),
            new Persona(12, 'Andrés Fariña', 'farinavaldivia@gmail.com', 'Backend', ''),
            new Persona(13, 'Karla Reyes', 'karla.reyeslillo7@gmail.com', 'Backend', ''),
            new Persona(14, 'Esteban Riquelme', 'esteban11riquelme@gmail.com', 'Backend', ''),
        ];

        this.michis = [
            new LosMichis("Los Michis", "Alejandra Pantoja", this.personas, "UxUi,Frontend,AppMobile,Backend")
        ]
    }


    
    obtenerEquipo(): LosMichis[] {
        return this.michis;


    }

    
    obtenerPorSubGrupo(subGrupo: string): Persona[] {
        const subGrupoLowerCase = subGrupo.toLowerCase();
        return this.personas.filter(persona => persona.subGrupo.toLowerCase() === subGrupoLowerCase);
    }


    

    listaSubgrupos() {
        return `áreas:  UxUi: Alejandra Pantoja, Carolina Deck, Marcela Díaz, Sofía Pérez, Paula Vivallos.
                        Frontend: Jorge Mulchi, David Manríquez, Carlos Vega.
                        App Mobile: Nicolás Núñez, Rodrigo Carrasco.
                        Backend: Andrés Fariña, Karla Reyes, Esteban Riquelme, Cindy da Silva`;
    }

    
    obtenerDatosGenerales(): string {
      
        return texto;

    }


}




