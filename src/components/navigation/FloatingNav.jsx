import { useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../navigation/SearchBar";
import Favorites from "../navigation/Favorites";

import "../../styles/navigation.css"

const FloatingNav = ({search, setSearch, favorites}) => {
    const [showSearch, setShowSearch] = useState(false)

    return (
        <nav className="floating-nav">
            <Link to="/">
                <button>Home</button>
            </Link>
            <button onClick={() => setShowSearch(! showSearch)}>Buscar</button>
            <Favorites favorites={favorites}/>
            {
                showSearch && (
                    <SearchBar search={search} setSearch={setSearch}/>
                )
            }
        </nav>
    );
};

export default FloatingNav