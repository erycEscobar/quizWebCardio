import './UserSectionTitle.scss';

const UserSectionTitle = ({ icon, title }) => {

    return (
        <div className='title_container'>
            <img src={icon} alt="Icono de perfil de usuario" />
            <p>
                {title}
            </p>
        </div>
    )

}
export default UserSectionTitle