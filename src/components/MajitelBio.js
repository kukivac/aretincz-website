import moravecFace from "./images/moravec-min.webp";
import {Component} from "react";

class MajitelBio extends Component {
    render() {
        return (
            <div className={"moravec-info"}>
                <div className={"moravec-face"}>
                    <img src={moravecFace} alt={"Lukáš Moravec"}/>
                </div>
                <section className={"moravec-bio"}>
                    <h2>Lukáš Moravec - ředitel společnosti</h2>
                    <p>Prioritou společnosti je individuální přístup k&nbsp;zákazníkovi a&nbsp;snaha uspokojit co nejlépe jeho potřeby a&nbsp;zájmy.</p>
                </section>
            </div>
        );
    }
}

export default MajitelBio;
