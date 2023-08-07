import Destacado from '../../../../assets/02-Practicas/02-03-seleccionados.png';
import BienResuelto from '../../../../assets/02-Practicas/02-03-bien-realizados.png';
import MalResuelto from '../../../../assets/02-Practicas/02-03-mal-realizados.png';

export const DestacadoIcon = [
    {
        id: '1',
        icon: Destacado,
        filterType: true,
        description: 'SELECCIONAR',
    }
]

export const AutoevaluacionIcons = [
    {
        id: '1',
        icon: MalResuelto,
        filterType: false,
        description: 'RESUELTO INCORRECTO',
    },
    {
        id: '2',
        icon: BienResuelto,
        filterType: true,
        description: 'RESUELTO BIEN',
    }
]