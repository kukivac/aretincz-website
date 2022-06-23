import {Component} from "react";
import {Header, LandingPage} from "./index";
import envelope from "./icons/address.svg";
import MajitelBio from "./MajitelBio";

class PageNotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={"landing-page-container"}>
                    <section>
                        <h1>JEJDA, NĚCO<br/>SE NEPOVEDLO</h1>
                        <p>Vypadá to že stránku kterou hledáte jsme nenašli.</p>
                    </section>
                </div>
            </div>
        )
    }
}

export default PageNotFound;
