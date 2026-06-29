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
                <button
                    className="nav-toggle"
                    type="button"
                    aria-label="Open navigation menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
                <div className="nav-panel">
                <button
                    className="nav-close"
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() => setIsOpen(false)}
                >
                    ×
                </button>
                <Link to="/" className="nav-link">
                    <button>Home</button>
                </Link>
                <button
                    className="nav-action"
                    type="button"
                    onClick={() => setShowSearch(!showSearch)}
                >
                    Buscar
                </button>
                {
                    showSearch && (
                        <SearchBar search={search} setSearch={setSearch}/>
                    )
                }
                <Favorites favorites={favorites}/>
            </div>
        </nav>
    );
};

export default FloatingNav