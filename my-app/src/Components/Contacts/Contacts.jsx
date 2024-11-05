import React, {useState, useEffect} from 'react';


import VisibleContacts from './VisibleContacts';
import Form from './Form';
import Modal from './Modal';
import Filter from './Filter';

const Contacts = () => {
    
    
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [currentContactChange, setCurrentContactChange] = useState('');
    const [contacts, setContacts] = useState(() => {
    const localSave = JSON.parse(localStorage.getItem('contacts'))
    return localSave || [];
});



    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const filteredArray = contacts.filter((contact) => {
        console.log(contact);
        
        return contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.email.toLowerCase().includes(filter.toLowerCase()) || contact.phone.toLowerCase().includes(filter.toLowerCase())
        
        
    });
    
    return (
        <div>
            <Form setContacts={setContacts}/>
            <Filter filteredArray={filteredArray}/>
            <VisibleContacts filteredArray={filteredArray} setContacts={setContacts} contacts={contacts} setIsOpenModal={setIsOpenModal} setCurrentContactChange={setCurrentContactChange} />
            <Modal contacts={contacts} setContacts={setContacts} setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} currentContactChange={currentContactChange} />
        </div>
    );
}

export default Contacts;
