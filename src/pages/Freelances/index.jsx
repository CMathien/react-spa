import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import PropTypes from 'prop-types'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
]
function Freelances() {
  return (
    <div>
      <h1>Freelances</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  )
}

Card.propTypes = {
  label: PropTypes.string,
  titel: PropTypes.string,
  picture: PropTypes.string,
}

export default Freelances
