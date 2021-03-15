import {ADD_CONTACT, FETCH_CONTACTS, GET_CONTACT} from '../constants/types'; 

const url ="https://jsonplaceholder.typicode.com/users/";

export const fetchContacts = () => {
    
    return async (dispatch) => {
        let resp = await fetch(url); 
        let contacts = await resp.json(); 
        let action = {type:FETCH_CONTACTS, data: contacts}; 
        dispatch(action); 
    }
}

export const addContact =  (contact) =>  async (dispatch)   => {
    let resp = await fetch(url, {
        method  :"POST",
        body : JSON.stringify(contact),
        headers : {
            'Content-Type' :"application/json"
        }
    }); 

    let newContact = await resp.json(); 
    dispatch({type:ADD_CONTACT, data: newContact})
}

export const getContactById =(id) => async (dispatch) => {
	let resp = await fetch(url+id) 
    let contact  = await resp.json() ;
    let action = {type:GET_CONTACT, data: contact}; 
	dispatch (action);
}