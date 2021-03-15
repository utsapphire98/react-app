import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContactById } from '../actions/contacts-action';

class ContactDetails extends Component {

    componentDidMount() {
        let { id } = this.props.match.params;
        this.props.getContact(id);
    }

    render() {

        let { contact } = this.props;
        if (!contact) contact = {};

        return (
            <div>
                <h4> Details of User {contact.id}</h4>
                <div className="row">
                    <div>
                        <table class="table table-striped">
                            <tr>
                                <td class="table-primary">Name</td>
                                <td><div className="card-title">{contact.name}  </div></td>
                            </tr>
                            <tr>
                                <td class="table-primary">Email </td>
                                <td>  <div className="card-text">{contact.email}</div></td>
                            </tr>
                            <tr>
                                <td class="table-primary">Phone </td>
                                <td><div className="card-text">{contact.phone}</div></td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

const stateAsProps = (reducers) => (
    {
        contact: reducers.contactsReducer.contact
    }
)

const actionsAsProps = {
    getContact: getContactById
}
export default connect(stateAsProps, actionsAsProps)(ContactDetails);