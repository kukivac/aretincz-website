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
                   <Link to="/">
                        <img src={logo} alt={"Aretin geoinformatics logo"}/>
                    </Link>
                </section>
                {/*<nav>*/}
                {/*    <div className={"nav-item"}>*/}
                {/*        <Link onClick={this.props.toggleMenuClick} to="/">DOMŮ</Link>*/}
                {/*    </div>*/}
                {/*    <div className={"nav-item"}>*/}
                {/*        <Link onClick={this.props.toggleMenuClick} to="/">NAŠE&nbsp;SLUŽBY</Link>*/}
                {/*    </div>*/}
                {/*    <div className={"nav-item"}>*/}
                {/*        <Link onClick={this.props.toggleMenuClick} to="/">O&nbsp;NÁS</Link>*/}
                {/*    </div>*/}
                {/*    <div className={"nav-item"}>*/}
                {/*        <a onClick={this.props.toggleMenuClick} href={"#null"}>NAŠE PROJEKTY</a>*/}
                {/*    </div>*/}
                {/*</nav>*/}
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
