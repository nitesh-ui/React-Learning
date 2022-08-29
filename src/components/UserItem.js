import React, { Component } from 'react'
import Users from './Users'

export class UserItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                users: json,
            })
        })
    }

    render() {
        return (
            <div className="container my-3">
                <h4 className="text-center">Users detail</h4>
                <div className="row">
                    {this.state.users && this.state.users.map((element) => {
                        return <div className="col-md-12" key={element.id}>
                            <Users key={element.id} name={element.name} username={element.username} email={element.email} company={element.company.name}
                            phone={element.phone} website={element.website} street={element.address.street} city={element.address.city}  zipcode={element.address.zipcode}/> 
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default UserItem