import "../styles/header.scss";
import {Component} from "react";
import {Routes, Route, Link } from "react-router-dom";
import menu from "../icons/menu.png"
import logo from "../images/logo_cervene_nabilepozadi.png"
//import aretinIcon from "./images/aretinLogo.png";

class Header extends Component {
    render() {
        return (
            <header id={"header"}>
                <section className={"icon-container"}>
                    <a href={"#header"}>
                        <img src={logo} alt={"Aretin geoinformatics logo"}/>
                    </a>
                </section>
                <nav>

                    <div className={"nav-item"}>
                        <a href={"#header"}>HOME</a>
                    </div>
                    <div className={"nav-item"}>
                        <a href={"#sluzby"}>NAŠE&nbsp;SLUŽBY</a>
                    </div>
                    <div className={"nav-item"}>
                        <a href={"#about"}>O&nbsp;NÁS</a>
                    </div>
                    <div className={"nav-item"}>
                        <Link to="/projekty">NAŠE&nbsp;PROJEKTY</Link>
                    </div>
                </nav>
                <section className={"contact-button-container"}>
                    <div className={"contact-button"} onMouseDown={this.props.toggleContactClick}>
                        NAPIŠTE&nbsp;NÁM
                    </div>
                </section>
                <section className={"menu-button-container"}>
                    <div className={"menu-button"}>
                        <img src={menu} alt={"menu icon"} onMouseDown={this.props.toggleMenuClick}/>
                    </div>
                </section>
            </header>
        );
    }
}

export default Header;
