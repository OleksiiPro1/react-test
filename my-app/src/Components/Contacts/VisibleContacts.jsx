import React from 'react';
import images from '../../Assets/index';
const VisibleContacts = ({setContacts, contacts,setIsOpenModal,setCurrentContactChange, abs}) => {
    function onDelete(id) {
        console.log(id);
        const filteredArray = contacts.filter((contact) => {
            return id !== contact.id;
        });
        setContacts(filteredArray);
    }
    return (
        <ul>
        {abs.map((contact) =>{
            return (<li key={contact.id}><p>{contact.name}: {contact.phone} / {contact.email}</p><img onClick={() => {
                setIsOpenModal(true);
                setCurrentContactChange(contact.id);
            }} style={{width: '20px'}} src={images.penImg} alt="pen" /><img onClick={() => {onDelete(contact.id)}} style={{width: '20px'}} src={images.closeImg} alt="close" /></li>)
        })}
    </ul>
    );
}

export default VisibleContacts;
