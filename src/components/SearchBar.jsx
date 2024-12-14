import {useState} from "react";

// eslint-disable-next-line react/prop-types
function SearchBar({input}) {

    function handleChange(e) {
        const value = e.target.value;
        input(value);
    }

    return (
        <input
            type="text"
            onChange={handleChange}
        ></input>
    )
}

export default SearchBar