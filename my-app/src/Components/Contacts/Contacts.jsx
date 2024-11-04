import React, {useState, useEffect} from 'react';


import VisibleContacts from './VisibleContacts';
import Form from './Form';
import Modal from './Modal';

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

    


    
    

    

    function onDelete(id) {
        console.log(id);
        const filteredArray = contacts.filter((contact) => {
            return id !== contact.id;
        });
        setContacts(filteredArray);
    }
    return (
        <div>
            <Form />
            <VisibleContacts contacts={contacts} setIsOpenModal={setIsOpenModal} setCurrentContactChange={setCurrentContactChange} onDelete={onDelete}/>
            <Modal contacts={contacts} setContacts={setContacts} setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} currentContactChange={currentContactChange} />
        </div>
    );
}

export default Contacts;
