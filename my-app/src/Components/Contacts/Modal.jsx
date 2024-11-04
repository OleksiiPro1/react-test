import React, {useState} from 'react';
import images from '../../Assets/index';
import s from './Contacts.module.css';


const Modal = ({setIsOpenModal, isOpenModal, contacts, currentContactChange, setContacts}) => {
    const [modalInput, setModalInput] = useState('');
    const [modalPhoneNumber, setModalPhoneNumber] = useState('');
    const [modalEmail, setModalEmail] = useState('');

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

        setIsOpenModal(false);

    }


    return (
        <>
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
        </>
    );
}

export default Modal;
