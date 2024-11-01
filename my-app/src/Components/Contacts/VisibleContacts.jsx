import React from 'react';
import images from '../../Assets/index';
const VisibleContacts = ({contacts,setIsOpenModal,setCurrentContactChange,onDelete}) => {
    return (
        <ul>
        {contacts.map((contact) =>{
            return (<li key={contact.id}><p>{contact.name}: {contact.phone} / {contact.email}</p><img onClick={() => {
                setIsOpenModal(true);
                setCurrentContactChange(contact.id);
            }} style={{width: '20px'}} src={images.penImg} alt="pen" /><img onClick={() => {onDelete(contact.id)}} style={{width: '20px'}} src={images.closeImg} alt="close" /></li>)
        })}
    </ul>
    );
}

export default VisibleContacts;
