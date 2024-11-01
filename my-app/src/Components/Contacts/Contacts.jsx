import React, {useState, useEffect} from 'react';

import images from '../../Assets/index';
import s from './Contacts.module.css';
import VisibleContacts from './VisibleContacts';
import Form from './Form';

const Contacts = () => {
    const [modalInput, setModalInput] = useState('');
    const [modalPhoneNumber, setModalPhoneNumber] = useState('');
    const [modalEmail, setModalEmail] = useState('');
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [currentContactChange, setCurrentContactChange] = useState('');
    const [contacts, setContacts] = useState(() => {
    const localSave = JSON.parse(localStorage.getItem('contacts'))
    return localSave || [];
});

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    

    function modalHandlSubmit(e) {
        e.preventDefault();
        if(!modalInput || !modalPhoneNumber || !modalEmail) {
            alert('All fields must be filled out!');
            return;
        }

       
        const newContactList = contacts.map((contact) =>{
            if (contact.id === currentContactChange) {
    return {id: currentContactChange, name: modalInput, phone: modalPhoneNumber, email: modalEmail}
            } else {
                return contact
            }
        })
         console.log(newContactList);
        setContacts(newContactList);
        setModalInput('');
        setModalPhoneNumber('');
        setModalEmail('');
        setIsOpenModal(false)
    }

    function modalHandleInput(e) {
        setModalInput(e.target.value);
    }
    function modalHandleInputPhoneNumber(e) {
        setModalPhoneNumber(e.target.value);
    }
    function modalHandleInputEmail(e) {
        setModalEmail(e.target.value);
    }

    function onClose() {
        setIsOpenModal(false)
    }

    function onDelete(id) {
        console.log(id);
        const filteredArray = contacts.filter((contact) => {
            return id !== contact.id;
        });
        setContacts(filteredArray);
    }
    return (
        <div>
            <Form setContacts={setContacts}/>
            <VisibleContacts contacts={contacts} setIsOpenModal={setIsOpenModal} setCurrentContactChange={setCurrentContactChange} onDelete={onDelete}/>
            {isOpenModal && <div className={s.overlay}>
                <div className={s.modal}>
                    <form action="submit" onSubmit={modalHandlSubmit} >
                        <input type="text" value={modalInput} onChange={modalHandleInput} />
                        <input type="text" value={modalPhoneNumber} onChange={modalHandleInputPhoneNumber} />
                        <input type="text" value={modalEmail} onChange={modalHandleInputEmail} />
                        <button type='submit'>Edit</button>
                        
                        <img onClick={() => {onClose()}} style={{width: '20px'}} src={images.closeImg} alt="close" />
                    </form>
                </div>
            </div>}
        </div>
    );
}

export default Contacts;
