import React, {Component} from "react";
import {Link} from "react-router-dom";

class MobileNav extends Component {
    render() {
        return (
            <div className={this.props.visible ? "mobile-nav" : "mobile-nav hidden"}>
                <span onClick={this.props.toggleMenuClick} className={"close-contact"}>

                </span>
                <nav>
                    {/*<Link onClick={this.props.toggleMenuClick} to="/">ZPĚT</Link>*/}
                    {/*<Link onClick={this.props.toggleMenuClick} to="/">NAŠE SLUŽBY</Link>*/}
                    {/*<Link onClick={this.props.toggleMenuClick} to="/">O NÁs</Link>*/}
                    {/*<a onClick={this.props.toggleMenuClick} href={"#null"}>NAŠE PROJEKTY</a>*/}
                    <a href={"#null"} onClick={this.props.toggleMenuContactClick}>NAPIŠTE NÁM</a>
                </nav>
            </div>
        )
    }
}

export default MobileNav;