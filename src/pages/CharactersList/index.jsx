import { colors } from '../../utils/style/colors'
import styled from 'styled-components'

//import component
import CharactersArray from '../../components/CharactersArray'
import { Characters } from '../../Data/CharactersData'
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
function CharactersList() {
    const init = () => {
        if (!localStorage.getItem('employee')) {
            localStorage.setItem('employee', JSON.stringify(Characters))
        }
    }
    init()
    document.title = 'charactersgallery - Home'
    return (
        <Contents>
            <Title>LIST OF CHARACTERS !</Title>
            <CharactersArray />
        </Contents>
    )
}

export default CharactersList
