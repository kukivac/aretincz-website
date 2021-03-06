import "./styles/header.scss";
import {Component} from "react";
import menu from "./icons/menu.webp"
import logo from "./images/logo_cervene_nabilepozadi.webp"

//import aretinIcon from "./images/aretinLogo.webp";

class Header extends Component {
    render() {
        return (
            <header id={"header"}>
                <div className={"icon-container"}>
                    <a href={"#header"}>
                        <img src={logo} alt={"Aretin geoinformatics logo"}/>
                    </a>
                </div>
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
                        <a href={"#projekty"}>NAŠE&nbsp;PROJEKTY</a>
                    </div>
                </nav>
                <div className={"contact-button-container"}>
                    <div className={"contact-button"} onMouseDown={this.props.toggleContactClick}>
                        NAPIŠTE&nbsp;NÁM
                    </div>
                </div>
                <div className={"menu-button-container"}>
                    <div className={"menu-button"}>
                        <img src={menu} alt={"menu icon"} onMouseDown={this.props.toggleMenuClick}/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
