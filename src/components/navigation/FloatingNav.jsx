import { useState } from "react";

import SearchBar from "../navigation/SearchBar";

import "../../styles/navigation.css"

const FloatingNav = ({search, setSearch}) => {
    const [showSearch, setShowSearch] = useState(false)

    return (
        <nav className="floating-nav">
            <button>Home</button>
            <button onClick={() => setShowSearch(! showSearch)}>Buscar</button>
            <button>Favoritos</button>
            {
                showSearch && (
                    <SearchBar search={search} setSearch={setSearch}/>
                )
            }
        </nav>
    );
};

export default FloatingNav