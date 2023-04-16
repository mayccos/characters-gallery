import React from 'react'

// Import of @mui library to create a table
import { DataGrid, GridToolbarFilterButton } from '@mui/x-data-grid'

// Custom and style
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

// Creation components that using styled-component
/**
 * @description  to custom the toolbar of table
 * @return function CustomToolbar
 */
function CustomToolbar() {
    return <GridToolbarFilterButton style={{ color: 'black' }} />
}
/**
 * @typedef {("name"| "universe"| "affiliation")} showKeys
 */

/**
 * This function is used to show an array of current Employee
 */
function CharactersArray() {
    let addOneUser = localStorage.getItem('characters')

    let users = JSON.parse(addOneUser)

    const rows = []

    if (users !== null) {
        users.map((user, index) =>
            rows.push({
                id: index,
                name: user.name,
                universe: user.universe,
                affiliation: user.affiliation,
            })
        )
    }

    /* To Create an array of objects that will be used to complete  the table. */
    const columns = [
        { field: 'name', headerName: 'name', width: 150 },
        { field: 'universe', headerName: 'universe', width: 150 },
        { field: 'hero/villain', headerName: 'hero/villain', width: 150 },
    ]

    /**
     *  @return {JSX} table to display the list of employee
     */

    return (
        <div
            style={{
                width: '85%',
                marginTop: '2rem',
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                components={{ Toolbar: CustomToolbar }}
                autoHeight={true}
            />
        </div>
    )
}

export default CharactersArray
