import './NavBarOptions.scss';
import { Link } from 'react-router-dom';
const NavBarOptions = ({ optionList }) => {
  
  return (
    <div className="navBarOptions_container">
      <ul>
        {optionList.map((option) => {
          return (
            <li key={option.id}>
              <Link to={option.link}>
                {option.icon && 
                  <img src={option.icon} alt={option.alt}/>
                }
                <p>
                  {option.label}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )

}
export default NavBarOptions