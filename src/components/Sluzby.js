import {Component} from "react";
import geoSystemyIcon from "./icons/networkIllustration.svg";
import pruzkumIcon from "./icons/magnifieIllustration.svg";
import kartografieIcon from "./icons/mapIllustration.svg";

class Sluzby extends Component {
    constructor(props) {
        super(props);
        this.state = {number: this.randomNumber()};
        this.setNumber = this.setNumber.bind(this)
        this.randomNumber = this.randomNumber.bind(this)
        setInterval(this.setNumber, 5000)
    }

    randomNumber() {
        return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    }

    setNumber() {
        this.setState({number: this.randomNumber()})
    }

    render() {
        return (
            <div className={"sluzby-container"} id={"sluzby"}>
                <div className={"sluzby-header"}>
                    <section>
                        <h5>Naše služby</h5>
                    </section>
                    <section>
                        <h4>Výsledky vlastních projektů<br/>dokládají naší úspěšnost</h4>
                        <p className={"priority-text"}>Prioritou společnosti je individuální přístup k zákazníkovi a snaha uspokojit co nejlépe jeho potřeby a zájmy.</p>
                    </section>
                </div>
                <div className={"sluzby-souhrn"}>
                    <div>
                        <h2>NAŠE SLUŽBY</h2>
                    </div>
                    <div>
                        <section className={this.state.number === 1 ? "sluzby-section m-shown" : "sluzby-section"}>
                            <div className={"icon-container"}>
                                <img src={geoSystemyIcon} alt={"services icon"}/>
                            </div>
                            <h3>Geoinformační<br/>systémy</h3>
                            <p>Geoinformační systémy slouží pro ukládání, aktualizaci, organizaci, analýzy, syntézy a vizualizace forem prostorových a lokalizovaných geografických, geologických, ekologických, ekonomických a dalších dat.</p>
                        </section>
                        <section className={this.state.number === 2 ? "sluzby-section m-shown" : "sluzby-section"}>
                            <div className={"icon-container"}>
                                <img src={pruzkumIcon} alt={"services icon"}/>
                            </div>
                            <h3>Dálkový<br/>průzkum&nbsp;země</h3>
                            <p>Metody kosmického i leteckého dálkového průzkumu umožňují sběr aktuálních, prostorově i spektrálně velmi přesných dat, která slouží jako základní zdroj informací při tvorbě databází geoinformačních systémů.</p>
                        </section>
                        <section className={this.state.number === 3 ? "sluzby-section m-shown" : "sluzby-section"}>
                            <div className={"icon-container"}>
                                <img src={kartografieIcon} alt={"services icon"}/>
                            </div>
                            <h3>Digitální<br/>kartografie</h3>
                            <p>Konveční kartografická tvorba je v současné době nahrazována metodami digitální kartografie.</p>
                        </section>
                    </div>

                </div>
            </div>
        );
    }
}

export default Sluzby;
