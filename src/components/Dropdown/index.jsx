import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

// Creation components that using styled-component
const DropdownSelect = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const SelectName = styled.select`
    margin-bottom: 20px;
    width: 41vh;
    height: 55px;
    font-size: 2.5vh;
    border-radius: 20px;
    border: solid 2px ${colors.blue};
    color: ${colors.blue};
`

const Option = styled.option`
    color: ${colors.blue};
`
export const DropdownComponent = ({
    defaultValue,
    options,
    label,
    selectName,
    wrapperStyle,
    selectStyle,
}) => {
    return (
        <DropdownSelect style={wrapperStyle}>
            <SelectName
                label={label}
                name={selectName}
                id={selectName}
                className={selectName}
                style={selectStyle}
            >
                <Option value="">{defaultValue}</Option>
                {options.map((option) => {
                    return (
                        <option
                            value={option.value ? option.value : option.option}
                            key={option.option}
                        >
                            {option.option}
                        </option>
                    )
                })}
            </SelectName>
        </DropdownSelect>
    )
}
// Prop-Types
DropdownComponent.propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    options: PropTypes.array,
    wrapperStyle: PropTypes.object,
    selectStyle: PropTypes.object,
}
