import React, {Component} from "react";
import {Link} from "react-router-dom";

class MobileNav extends Component {
    render() {
        return (
            <div className={this.props.visible ? "mobile-nav" : "mobile-nav hidden"}>
                <span onClick={this.props.toggleMenuClick} className={"close-contact"}>

                </span>
                <nav>
                    <a href={"#header"} onClick={this.props.toggleMenuClick}>DOMŮ</a>
                    <a href={"#sluzby"} onClick={this.props.toggleMenuClick}>NAŠE SLUŽBY</a>
                    <a href={"#about"} >O NÁS</a>
                    <Link onClick={this.props.toggleMenuClick} to="/projekty">NAŠE PROJEKTY</Link>
                    <a href={"#null"} onClick={this.props.toggleMenuContactClick}>NAPIŠTE NÁM</a>
                </nav>
            </div>
        )
    }
}

export default MobileNav;