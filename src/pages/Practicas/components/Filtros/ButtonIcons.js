import EjNoRealizado from '../../../../assets/02-Practicas/02-02-sin-realizar.png';
import EjRealizado from '../../../../assets/02-Practicas/02-02-realizados.png';

import Nivel1 from '../../../../assets/02-Practicas/02-02-nivel-1.png';
import Nivel2 from '../../../../assets/02-Practicas/02-02-nivel-2.png';
import Nivel3 from '../../../../assets/02-Practicas/02-02-nivel-3.png';

import EjDestacado from '../../../../assets/02-Practicas/02-02-destacados.png';
import EjMalResuelto from '../../../../assets/02-Practicas/02-02-mal-realizados.png';
import EjBienResuelto from '../../../../assets/02-Practicas/02-02-bien-realizados.png';

export const realizacionButtons = [ 
    {
        id: '1',
        icon: EjNoRealizado,
        filterType: false,
        description: 'SIN REALIZAR',
    },
    {
        id: '2',
        icon: EjRealizado,
        filterType: true,
        description: 'REALIZADOS',
    }
];

export const nivelesButtons = [ 
    {
        id:'1',
        icon: Nivel1,
        filterType: '1',
        description: 'NIVEL 1',
    },
    {
        id:'2',
        icon: Nivel2,
        filterType: '2',
        description: 'NIVEL 2',
    },
    {
        id:'3',
        icon: Nivel3,
        filterType: '3',
        description: 'NIVEL 3',
    },
];

export const  favButton = [
    {
        id:'1',
        icon: EjDestacado,
        filterType: true,
        description: 'SELECCIONADOS',
    },
];

export const autoEvButtons = [ 
    {
        id:'1',
        icon: EjMalResuelto,
        filterType: false,
        description: 'RESUELTOS INCORRECTOS',
    },
    {
        id:'2',
        icon: EjBienResuelto,
        filterType: true,
        description: 'RESUELTOS BIEN',
    },
];