import {ADD_CONTACT, FETCH_CONTACTS, GET_CONTACT} from '../constants/types';

export default (state = {contacts: []}, action) => {
    switch (action.type) {
        case ADD_CONTACT:
        {
            let contacts = [...state.contacts];
            contacts.push(action.data);
            return {...state, contacts};
        }
        case GET_CONTACT :
        {
            return {...state, contact: action.data}; 
        }
        case FETCH_CONTACTS:
            return {...state, contacts: action.data};
        default:
            return state;
    }
}


