import {About, MainpageContact, MainpageFooter, MainpageHeader, Kvality, LandingPage, MainpageMobileNav, Projekty, Sluzby} from "../index";
import {Component} from "react";

class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactVisible: false
        }
        this.toggleContactClick = this.toggleContactClick.bind(this);
        this.toggleContactState = this.toggleContactState.bind(this);
        this.toggleMenuClick = this.toggleMenuClick.bind(this);
        this.toggleMenuState = this.toggleMenuState.bind(this);
        this.toggleMenuContactClick = this.toggleMenuContactClick.bind(this);
    }

    toggleContactClick(e) {
        this.toggleContactState();
        e.stopPropagation();
    }

    toggleMenuClick(e) {
        this.toggleMenuState();
        e.stopPropagation();
    }

    toggleMenuContactClick(e) {
        this.toggleMenuState();
        this.toggleContactState();
        e.stopPropagation();
    }

    toggleContactState() {
        this.setState(
            {
                contactVisible: !this.state.contactVisible
            }
        );
    }

    toggleMenuState() {
        this.setState(
            {
                menuVisible: !this.state.menuVisible
            }
        );
    }

    render() {
        return (
            <div>
                <MainpageContact visible={this.state.contactVisible} toggleContact={this.toggleContactClick}/>
                <MainpageHeader toggleContactClick={this.toggleContactClick} toggleMenuClick={this.toggleMenuClick}/>
                <LandingPage toggleContactClick={this.toggleContactClick}/>
                <Kvality/>
                <Sluzby/>
                <About/>
                <Projekty/>
                <MainpageFooter toggleContactClick={this.toggleContactClick}/>
                <MainpageMobileNav visible={this.state.menuVisible} toggleMenuClick={this.toggleMenuClick} toggleContactClick={this.toggleContactClick} toggleMenuContactClick={this.toggleMenuContactClick}/>
            </div>
        )
    }
}

export default Mainpage;