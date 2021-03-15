import {getContactById} from '../actions/contacts-action'; 
import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom'

const ContactCard = ({ contact}) => (
    <div className="card">
        <div className="row">
            <div className="col-md-12">
                <div className="card-body">
                    <p className="card-title">
                        <Link className="title-bg" to={"/contact-detail/" +contact.id}>
                            {contact.id}
                        </Link> 
                    </p>
                    <p className="card-text">{contact.name}</p>
                    <p className="card-text">{contact.email}</p>
                    <p className="card-text">{contact.phone}</p>
                </div>
            </div>
        </div>
    </div>
)
export default  connect(null, {getContactById}) (ContactCard); 