import React from 'react';
import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
const Form = ({setContacts}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [inputValue, setInputValue] = useState('');
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
    return (
        <form action="submit" onSubmit={handleSubmit}>
                <label>Name </label><br />
                <input onChange={handleInput} value={inputValue} type="text" /><br /><br />
                <label>Phone number </label><br />
                <input onChange={handleInputPhoneNumber} value={phoneNumber} type="text" /><br /><br />
                <label>Email </label><br />
                <input onChange={handleInputEmail} value={email} type="text" /><br /><br />
                <button type='submit' onSubmit={handleSubmit}>Add a contact</button>
            </form>
    );
}

export default Form;
