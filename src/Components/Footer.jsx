import React from "react";
import "./style.css";

function Footer(){
    const fullYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <em className="copyright">©{fullYear} KeepToDo</em>
        </footer>
    )
}
export default Footer;