import React from 'react';

const Filter = () => {
    const [filter, setFilter] = useState('');
    function handleFilter(e) {
        setFilter(e.target.value);
    }
    return (
        <div>
            <input type="text" value={filter} onChange={handleFilter} />
        </div>
    );
}

export default Filter;
