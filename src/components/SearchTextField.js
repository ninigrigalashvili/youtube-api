import React, {useState} from 'react';

const SearchTextField = (props) => {
    const [title, setTitle] = useState('');

   const  onSearchChanged = event => {
        const _title = event.target.value;
        setTitle(_title)
    }

    const onSubmit = event => {
        event.preventDefault();
        props.onSearch(title)
    }

    return (
        <form className="search-text-field" onSubmit={onSubmit}>
            <input
                value={title}
                onChange={onSearchChanged}
                className="search-text-field__input"
                type="text"
                name="text-field"
                placeholder="Type Keywords" />
            <i className="fas fa-search"></i>
        </form>
    )
}

export default SearchTextField