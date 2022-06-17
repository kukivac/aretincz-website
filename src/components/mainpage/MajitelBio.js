import moravecFace from "../images/moravec.png";
import {Component} from "react";

class MajitelBio extends Component {
    render() {
        return (
            <div className={"moravec-info"}>
                <section className={"moravec-face"}>
                    <img src={moravecFace} alt={"Lukáš Moravec"}/>
                </section>
                <section className={"moravec-bio"}>
                    <h6>Lukáš Moravec - ředitel společnosti</h6>
                    <p>Prioritou společnosti je individuální přístup k&nbsp;zákazníkovi a&nbsp;snaha uspokojit co nejlépe jeho potřeby a&nbsp;zájmy.</p>
                </section>
            </div>
        );
    }
}

export default MajitelBio;
