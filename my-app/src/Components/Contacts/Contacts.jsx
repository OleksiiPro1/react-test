import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Contacts = () => {
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
            return [...prev, { id: uuidv4(), name: inputValue, phone: phoneNumber, email: email }]
        });
        
         

        setInputValue('');
        setPhoneNumber('');
        setEmail('');
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
                <button type='submit'>Add a contact</button>
            </form>
            <ul>
                {contacts.map((contact) =>{
                    return (<li key={contact.id}>{contact.name}: {contact.phone} / {contact.email}</li>)
                })}
            </ul>
        </div>
    );
}

export default Contacts;
