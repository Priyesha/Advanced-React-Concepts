import React from 'react'
import Columns from './Columns';

function Table() {
    return (
            <table>
                <tbody>
                    <thead>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Skill</th>
                    </thead>
                <tr>
                        <Columns />
                </tr>
                </tbody>
            </table>
    )
}

export default Table