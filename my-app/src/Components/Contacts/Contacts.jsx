import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import images from '../../Assets/index';
import s from './Contacts.module.css';

const Contacts = () => {
    const [modalInput, setModalInput] = useState('');
    const [modalPhoneNumber, setModalPhoneNumber] = useState('');
    const [modalEmail, setModalEmail] = useState('');
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [currentContactChange, setCurrentContactChange] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [contacts, setContacts] = useState(() => {
    const localSave = JSON.parse(localStorage.getItem('contacts'))
    return localSave || [];
});

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    function handleInput(e) {
        setInputValue(e.target.value);
    }
    function handleInputPhoneNumber(e) {
        setPhoneNumber(e.target.value);
    }
    function handleInputEmail(e) {
        setEmail(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!inputValue || !phoneNumber || !email) {
            alert('All fields must be filled out!');
            return;
        }
        
        setContacts((prev) => {
            return [...prev, { id: uuidv4(), name: inputValue, phone: phoneNumber, email }]
        });
        
         

        setInputValue('');
        setPhoneNumber('');
        setEmail('');
    }

    function modalHandlSubmit(e) {
        e.preventDefault();
        if(!modalInput || !modalPhoneNumber || !modalEmail) {
            alert('All fields must be filled out!');
            return;
        }

       
        const newContactList = contacts.map((contact) =>{
            if (contact.id === currentContactChange) {
    return [{id: currentContactChange, name: modalInput, phone: modalPhoneNumber, email: modalEmail}]
            } else {
                return contact
            }
        })
         
        setContacts(newContactList);
        setModalInput('');
        setModalPhoneNumber('');
        setModalEmail('');

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
            <form action="submit" onSubmit={handleSubmit}>
            <br />
                <label>Name </label><br />
                <input onChange={handleInput} value={inputValue} type="text" /><br /><br />
                <label>Phone number </label><br />
                <input onChange={handleInputPhoneNumber} value={phoneNumber} type="text" /><br /><br />
                <label>Email </label><br />
                <input onChange={handleInputEmail} value={email} type="text" /><br /><br />
                <button type='submit' onSubmit={handleSubmit}>Add a contact</button>
            </form>
            <ul>
                {contacts.map((contact) =>{
                    return (<li key={contact.id}><p>{contact.name}: {contact.phone} / {contact.email}</p><img onClick={() => {
                        setIsOpenModal(true);
                        setCurrentContactChange(contact.id);
                    }} style={{width: '20px'}} src={images.penImg} alt="pen" /><img onClick={() => {onDelete(contact.id)}} style={{width: '20px'}} src={images.closeImg} alt="close" /></li>)
                })}
            </ul>
            {isOpenModal && <div className={s.overlay}>
                <div className={s.modal}>
                    <form action="submit" onSubmit={modalHandlSubmit}>
                        <input type="text" value={modalInput} onChange={modalHandleInput} />
                        <input type="text" value={modalPhoneNumber} onChange={modalHandleInputPhoneNumber} />
                        <input type="text" value={modalEmail} onChange={modalHandleInputEmail} />
                        <button type='submit' onSubmit={modalHandlSubmit}>Edit</button>
                        
                        <img onClick={() => {onClose()}} style={{width: '20px'}} src={images.closeImg} alt="close" />
                    </form>
                </div>
            </div>}
        </div>
    );
}

export default Contacts;
