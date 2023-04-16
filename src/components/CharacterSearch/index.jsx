//Custom ans style
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

// Import Dropdown
import { DropdownComponent } from '../Dropdown'

//import data
import { universes, affiliation } from '../../utils/optionsDropdown'

// Creation components that using styled-component
const Div = styled.div`
    background-color: white;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    margin-top: 10px;
`
const Title = styled.h3``
const Label = styled.label`
    font-size: 2.5vh;
    color: ${colors.blue};
`
const Input = styled.input`
    width: 40vh;
    height: 50px;
    font-size: 2.5vh;
    border-radius: 20px;
    border: solid 2px ${colors.blue};
`

const Button = styled.button`
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 2.5vh;
    border-radius: 20px;
    border: solid 2px ${colors.red};
    color: ${colors.white};
    background-color: ${colors.red};
    &:hover {
        transform: scale(1.4);
    }
`

/**
 * @description Component that display the input to search a character or a dropdown to choice universe
 * @returns { JSX }
 */
function CharacterSearch() {
    return (
        <Div>
            <Form data-testid="form">
                <Label htmlFor="name-character" className="">
                    Specify name of character
                </Label>
                <Input
                    type="text"
                    id="name-character"
                    placeholder=""
                    data-testid="nameCharacter"
                />

                <Title>OR</Title>
                <Label htmlFor="universe" className="">
                    Choose an universe
                </Label>
                <DropdownComponent
                    data-testid="universe"
                    selectName="universe"
                    defaultValue=""
                    options={universes}
                    label=""
                    selectStyle={{}}
                    wrapperStyle={{}}
                />
                <Title>OR</Title>
                <Label htmlFor="affiliation" className="">
                    Choose Hero or Villain
                </Label>
                <DropdownComponent
                    data-testid="affiliation"
                    selectName="affiliation"
                    defaultValue=""
                    options={affiliation}
                    label=""
                    selectStyle={{}}
                    wrapperStyle={{}}
                />
                <Button type="submit" data-testid="searchButton">
                    Search
                </Button>
            </Form>
        </Div>
    )
}
export default CharacterSearch
