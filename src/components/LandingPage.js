import "./styles/landingPage.scss";
import envelope from "./icons/address.svg";
import {Component} from "react";
import MajitelBio from "./MajitelBio.js";

class LandingPage extends Component {
    render() {
        return (
            <div className={"landing-page-container"}>
                <section>
                    <h1>ARETIN<br/>GEOINFORMATICS</h1>
                    <p>Společnost nabízí pro své zákazníky širokou a rozmanitou škálu činností s odborným zaměřením na geoinformační systémy, dálkový průzkum Země a digitální kartografii.</p>
                    <div className={"contact-button"} onMouseDown={this.props.toggleContactClick}>
                        <div className={"post-image-container"}>
                            <img src={envelope} alt={"Envelope icon"}/>
                        </div>
                        <div className={"question-text"}>
                            MÁTE&nbsp;DOTAZ?
                        </div>
                    </div>
                </section>
                <MajitelBio/>
            </div>
        );
    }
}

export default LandingPage;