import React,{useState,useEffect} from 'react';

const Filter = ({contacts,setFilteredContacts}) => {
    const [filter, setFilter] = useState('');
    function handleFilter(e) {
        setFilter(e.target.value);
    }
    
useEffect(() => {
    const filteredArray = contacts.filter((contact) => {
        console.log(contact);
        
        return contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.email.toLowerCase().includes(filter.toLowerCase()) || contact.phone.toLowerCase().includes(filter.toLowerCase())  
    });

    setFilteredContacts(filteredArray)
}, [filter,contacts]);

    return (
        <div>
            <input type="text" value={filter} onChange={handleFilter} />
        </div>
    );
}

export default Filter;
