import {Component} from "react";
import {ProjektypageContact, ProjektypageFooter, ProjektypageHeader, ProjektypageMobileNav} from "../index";

class Projektypage extends Component {
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
                <ProjektypageContact visible={this.state.contactVisible} toggleContact={this.toggleContactClick}/>
                <ProjektypageHeader toggleContactClick={this.toggleContactClick} toggleMenuClick={this.toggleMenuClick}/>

                <ProjektypageFooter toggleContactClick={this.toggleContactClick}/>
                {/*<ProjektypageMobileNav visible={this.state.menuVisible} toggleMenuClick={this.toggleMenuClick} toggleContactClick={this.toggleContactClick} toggleMenuContactClick={this.toggleMenuContactClick}/>*/}
            </div>
        )
    }
}

export default Projektypage;