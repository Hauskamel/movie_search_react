import {useState} from "react";

function SearchBar() {
    const [userInput, setUserInput] = useState("");

    function handleChange(e) {
        // if data is backspace, enter
        if (e.nativeEvent.data == null) return;

        setUserInput(userInput + e.nativeEvent.data);
    }

    return (
        <input onChange={handleChange}></input>
    )
}

export default SearchBar