import React from "react";
import "./style.css";

function Header(){
    return (
        <header className="header">
            <nav className="nav">
                <span className="brand__name">KeepToDo</span>

                <a href="https://indradevkr.github.io/about/" className="know-about" target="_blank" rel="noreferrer">Know Developer</a>
            </nav>
        </header>
    )
}
export default Header;