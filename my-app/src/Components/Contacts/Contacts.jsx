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
    const [filteredContacts, setFilteredContacts] = useState([]);



    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

   
    // props = {filteredContacts:filteredContacts,setContacts:setContacts}
    return (
        <div>
            <Form setContacts={setContacts}/>
            <Filter setFilteredContacts={setFilteredContacts} contacts={contacts} filteredArray={filteredContacts}/>
            <VisibleContacts abs={filteredContacts} setContacts={setContacts} contacts={contacts} setIsOpenModal={setIsOpenModal} setCurrentContactChange={setCurrentContactChange} />
            <Modal contacts={contacts} setContacts={setContacts} setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} currentContactChange={currentContactChange} />
        </div>
    );
}

export default Contacts;
