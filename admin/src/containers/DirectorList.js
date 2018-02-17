import { Table } from 'reactstrap'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import { fetchDirectors } from '../actions'

class DirectorList extends Component {
    componentDidMount() {
        this.props.fetchDirectors()
    }

    render() {
        return (
            <Table>
                <thead className="thead-dark">
                    <tr>
                        <th>id</th>

                        <th
                            className="text-right"
                            style={{paddingRight: "5rem"}}
                        >
                            Name (Arabic)
                        </th>

                        <th>Name (English)</th>
                        <th>Name (French)</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.directors.map(director => (
                        <tr key={director.id}>
                            <td>{director.id}</td>
                            
                            <td className="text-right"
                                style={{paddingRight: "5rem", maxWidth: "8rem"}}
                            >
                                {director.name_ar}
                            </td>
                            
                            <td>{director.name_en}</td>
                            <td>{director.name_fr}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}

export default connect(
    state => ({ directors: state.directors.directors }), 
    { fetchDirectors }
)(DirectorList)
