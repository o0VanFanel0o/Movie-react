import { useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../navigation/SearchBar";
import Favorites from "../navigation/Favorites";

import "../../styles/navigation.css"

const FloatingNav = ({search, setSearch, favorites}) => {
    const [showSearch, setShowSearch] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={`floating-nav ${isOpen ? "open" : ""}`}>
            <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            <div className="nav-panel">
                <button className="nav-close" onClick={() => setIsOpen(false)}>
                X
                </button>
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
            </div>
        </nav>
    );
};

export default FloatingNav