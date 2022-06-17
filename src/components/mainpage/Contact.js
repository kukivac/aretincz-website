import React from "react";
import mapPin from "../icons/mapPin.svg"
import phone from "../icons/phone.svg"
import mail from "../icons/mail.svg"

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            showMessage: false
        }
        this.alert = this.alert.bind(this);
    }

    alert(formState) {
        if (formState.name !== "" && formState.type !== "" && formState.email !== "" && formState.popis !== "") {
            window.emailjs.send(
                'service_k9fecty', "template_297dt1b",
                {
                    "from_name": formState.name,
                    "from_email": formState.email,
                    "type": formState.type,
                    "message": formState.popis
                }
            ).then(res => {
                this.setState({message: "Zpráva úspěšně odeslaná", showMessage: true})
                setInterval(() => {
                    this.setState({showMessage: false})
                }, 8000)
            })
                // Handle errors here however you like, or use a React error boundary
                .catch(err => {
                    this.setState({message: "Nepovedlo se odeslat zprávu", showMessage: true})
                    setInterval(() => {
                        this.setState({showMessage: false})
                    }, 8000)
                })
        } else {
            this.setState({message: "Je potřeba vyplnit všechny pole", showMessage: true})
            setInterval(() => {
                this.setState({showMessage: false})
            }, 8000)
        }
    }

    render() {
        const visible = this.props.visible;
        return (
            <div className={visible ? "contact-container visible" : "contact-container hidden"}>
                <span onClick={this.props.toggleContact} className={"close-contact"}>

                </span>
                <div>
                    <h1>Napište nám!</h1>
                </div>
                <div className={"contact-info"}>
                    <a href={"https://mapy.cz/zakladni?x=14.4170538&y=50.0678970&z=17&source=addr&id=13974202"}>
                        <div className={"icon-container"}>
                            <img src={mapPin} alt={"Map pin icon"}/>
                        </div>
                        <p> Vyšehradská&nbsp;2,<br/>128&nbsp;00&nbsp;Praha&nbsp;2 </p>
                    </a>
                    <a href={"mailto:info@aretin.cz"}>
                        <div className={"icon-container"}>
                            <img src={mail} alt={"mail icon"}/>
                        </div>
                        <p>info@aretin.cz</p>
                    </a>
                    <a href={"tel:+420777590190"}>
                        <div className={"icon-container"}>
                            <img src={phone} alt={"phone icon"}/>
                        </div>
                        <p>+420 777 590 190</p>
                    </a>
                </div>
                <Form alert={this.alert}/>
                <Message message={this.state.message} show={this.state.showMessage}/>
            </div>

        )
    }
}

class Message extends React.Component {
    render() {
        return (
            <div className={this.props.show ? "message-container" : "message-container hidden"}>
                <div>
                    {this.props.message}
                </div>
            </div>
        )
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popis: '',
            name: '',
            email: '',
            type: ''
        };
        this.handlePopisChange = this.handlePopisChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form className="mailing">
                <div>
                    <label htmlFor={"name"}>Jméno Příjmení (firma)</label>
                    <input
                        type={"text"}
                        id={"name"}
                        value={this.state.name}
                        required
                        onChange={this.handleNameChange}/>
                </div>
                <div>
                    <label htmlFor={"email"}>Email</label>
                    <input
                        type={"email"}
                        id={"email"}
                        value={this.state.email}
                        required
                        onChange={this.handleEmailChange}/>
                </div>
                <div>
                    <label>Služba</label>
                    <ul className="choose-type">
                        <li>
                            <input type="radio" id="geo" value={"Geo systém"} name="type" required checked={this.state.type === "Geo systém"} onChange={this.handleTypeChange}/>
                            <label htmlFor="geo">Geo systém</label>
                        </li>
                        <li>
                            <input type="radio" id="pruzkum" value={"Průzkum"} name="type" required checked={this.state.type === "Průzkum"} onChange={this.handleTypeChange}/>
                            <label htmlFor="pruzkum">Průzkum</label>
                        </li>
                        <li>
                            <input type="radio" id="kartografie" value={"Kartografie"} name="type" required checked={this.state.type === "Kartografie"} onChange={this.handleTypeChange}/>
                            <label htmlFor="kartografie">Kartografie</label>
                        </li>
                    </ul>
                </div>
                <div>
                    <label>Popis projektu / Dotazu</label>
                    <textarea
                        id="popis"
                        name="popis"
                        onChange={this.handlePopisChange}
                        required
                        value={this.state.popis}/>
                </div>
                <button type="button" value="submit" onClick={this.handleSubmit}>Odeslat</button>
            </form>
        )
    }

    handlePopisChange(event) {
        this.setState({popis: event.target.value})
    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value})
    }

    handleTypeChange(event) {
        this.setState({type: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.alert(this.state)
        /*
        @todo Dodělat odeslání a validaci, tedy vyskakovací okno že uspech nebo neuspech
         */
    }
}

export default Contact;