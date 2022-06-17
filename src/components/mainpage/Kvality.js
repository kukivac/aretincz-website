import {Component} from "react";

class Kvality extends Component {
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
            <div className={"kvality-container"}>
                <div>
                    <section>
                        <h3>NAŠE KVALITY CENĚNÉ ZÁKAZNÍKY</h3>
                    </section>
                    <section className={this.state.number === 1 ? "kvality-section right-border m-shown" : "kvality-section right-border"}>
                        <h4 className={"heading-cest"}>Spolehlivost</h4>
                        <p>Našich klientů si vážíme, proto spolehlivě a za všech okolností plníme jejich požadavky.</p>
                    </section>
                    <section className={this.state.number === 2 ? "kvality-section right-border m-shown" : "kvality-section right-border"}>
                        <h4 className={"heading-kvalita"}>Kvalita</h4>
                        <p>Zakládáme si na kvalitě naší práce, protože víme, že tvoří hlavní pilíř dobré spolupráce.</p>
                    </section>
                    <section className={this.state.number === 3 ? "kvality-section m-shown" : "kvality-section "}>
                        <h4 className={"heading-respekt"}>Respekt</h4>
                        <p>Plně respektujeme všechny přání a potřeby klienta a ke každému přistupujeme individuálně.</p>
                    </section>
                </div>
            </div>
        );
    }
}

export default Kvality;
