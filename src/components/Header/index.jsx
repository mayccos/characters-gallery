import { colors } from '../../utils/style/colors'
import styled from 'styled-components'

// Creation components that using styled-component
const Main = styled.main`
    text-align: center;
    align-items: center;
    height: 100px;
    background-color: ${colors.blue};
`
const Title = styled.h1`
    color: ${colors.white};
    text-align: center;
`

/**
 * Creation of a component to show the header
 * @returns {JSX} header
 */
function Header() {
    return (
        <Main>
            <Title>HEROES AND VILLAINS OF UNIVERSES</Title>
        </Main>
    )
}
//Export
export default Header
