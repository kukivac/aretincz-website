import {Component} from "react";
import mailIcon from "./icons/mail1.webp"
import houseIcon from "./icons/address1.webp"
import phoneIcon from "./icons/phone1.webp"
import logo from "./images/logo_cervene_nabilepozadi.webp";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <h2>
                        Chtěli byste poradit s&nbsp;projektem?
                    </h2>
                    <div className={"contact-button"} onMouseDown={this.props.toggleContactClick}>
                        NAPIŠTE&nbsp;NÁM
                    </div>
                </div>
                <div>
                    <div className={"footer-dom-section"}>
                        <div>
                            <img src={logo} alt={"Aretin geoinformatics logo"}/>
                        </div>
                        <div>
                            <a href={"#header"}>Home</a>
                            <a href={"#sluzby"}>Naše&nbsp;služby</a>
                            <a href={"#projekty"}>Naše&nbsp;projekty</a>
                        </div>
                    </div>
                    <div className={"footer-dom-section"}>
                        <section>
                            <h3>Kontakt</h3>
                            <div>
                                <div className={"icon-container"}>
                                    <img src={mailIcon} alt={"mail icon"}/>
                                </div>
                                <a href={"mailto:info@aretin.cz"}>info@aretin.cz</a>
                            </div>
                            <div>
                                <div className={"icon-container"}>
                                    <img src={houseIcon} alt={"address icon"}/>
                                </div>
                                <a href={"https://mapy.cz/zakladni?x=14.4170538&y=50.0678970&z=17&source=addr&id=13974202"}>Vyšehradská&nbsp;2<br/>128&nbsp;00&nbsp;Praha&nbsp;2</a>
                            </div>
                            <div>
                                <div className={"icon-container"}>
                                    <img src={phoneIcon} alt={"phone icon"}/>
                                </div>
                                <a href={"tel:+420777590190"}>+420777590190</a>
                            </div>
                        </section>
                        <section>
                            <h3>Info</h3>
                            <div>
                                <p>ARETIN GEOINFORMATICS s.r.o.</p>
                            </div>
                            <div>
                                <p>IČ: 09546766</p>
                            </div>
                            <div>
                                <p>DIČ: CZ09546766</p>
                            </div>
                        </section>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
