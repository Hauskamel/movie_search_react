import SearchBar from "./components/SearchBar.jsx";

// styles
import './assets/app.css';

function App() {
    function handleInput (input) {
        console.log(input)
    }

    return (
        <div className="search-bar movie-search-bar">
            <SearchBar input={handleInput}/>
        </div>
    )
}

export default App