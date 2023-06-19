import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DarkLogo from '../../assets/dark-logo.png'
import LightLogo from '../../assets/light-logo.png'
import { StyledLink } from '../../utils/style/Atoms'
import { useTheme } from '../../utils/hooks'

const HomeLogo = styled.img`
  height: 70px;
`
const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  const { theme } = useTheme()
  return (
    <NavContainer>
      <Link>
        <HomeLogo ssrc={theme === 'light' ? DarkLogo : LightLogo} />
      </Link>
      <div>
        <StyledLink $theme={theme} to="/">Accueil</StyledLink>
        <StyledLink $theme={theme} to="/freelances">Profils</StyledLink>
        {/* Le $ est obligatoire dans les composants React, il indique que la prop est utilisée pour le style et ne doit pas être passée dans le DOM */}
        <StyledLink $theme={theme} to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
