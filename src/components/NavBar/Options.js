import TeoriaIcon from '../../assets/00-Home/TeoriaIcon.png'; 
import PracticasIcon from '../../assets/00-Home/PracticasIcon.png'; 
import UsuarioIcon from '../../assets/00-Home/UsuarioIcon.png'; 

export const Options = [
    {
        id: 0,
        label: "TEORÍA",
        icon: TeoriaIcon,
        alt: "icono teoria",
        link: "/Teoria",
    },
    {
        id: 1,
        label: "PRÁCTICAS",
        icon: PracticasIcon,
        alt: "icono practicas",
        link: "/Practicas",
    },
    {
        id: 2,
        label: "SUSCRIPCIÓN",
        icon: false,
        alt: "icono de suscripcion",
        link: "/Suscripcion",
    },
    {
        id: 3,
        label: "USUARIO",
        icon: UsuarioIcon,
        alt: "icono de usuario",
        link: "Usuario",
    },
]