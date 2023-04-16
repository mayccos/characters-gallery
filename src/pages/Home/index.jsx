import { colors } from '../../utils/style/colors'
import styled from 'styled-components'

//import component
import CharacterSearch from '../../components/CharacterSearch'
/**
 *
 * CSS for the component using styled.components
 */
const Contents = styled.main`
    margin: 0 auto;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
`

const Title = styled.h1`
    color: ${colors.blue};
`

/**
 * @description Component that show the Home page
 * @returns { HTMLElement }
 */
function Home() {
    document.title = 'charactersgallery - Home'
    return (
        <Contents>
            <Title>WELCOME TO THE GALLERY OF CHARACTERS !</Title>
            <CharacterSearch />
        </Contents>
    )
}

export default Home
