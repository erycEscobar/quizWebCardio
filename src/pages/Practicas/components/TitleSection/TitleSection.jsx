import './TitleSection.scss';

const TitleSection = ({icon, title}) => {
  return (
    <div className='titleSection_container'>
      <ul>
        <li><img src={icon} alt="" /></li>
        <li>{title}</li>
      </ul>
    </div>
  )
}
export default TitleSection