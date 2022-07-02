import {Component} from "react";
import aboutImage from "./images/mapsIllustration-min.webp"
import userIcon from "./icons/user.svg"
import cupIcon from "./icons/cup.svg"
import globeIcon from "./icons/globe.svg"
import MajitelBio from "./MajitelBio";

class About extends Component {
    render() {
        return (
            <div className={"about-container"} id={"about"}>
                <h2>O&nbsp;NÁS</h2>
                <div>
                    <section className={"illustration-container"}>
                        <img src={aboutImage} alt={"ilustrations"} className={"illustration"}/>
                    </section>
                    <section>
                        <div className={"about-section"}>
                            <img src={userIcon} alt={"icon"} className={"about-icon"}/>
                            <p>Společnost Aretin Geoinformatics s.r.o. byla založena v roce 2000. Jméno firmy inspiroval zeměměřič a kartograf ze 17. století, občan Starého města Pražského Pavel Aretin z Ehrenfeldu.</p>
                        </div>
                        <div className={"about-section"}>
                            <img src={cupIcon} alt={"icon"} className={"about-icon"}/>
                            <p>Úspěšnost naší práce lze doložit výsledky vlastních a kooperačních projektů. Je možno uvést např. klimatickou regionalizaci, regionalizační, evapotranspirační a topologické modelování, tvorbu elevačních modelů, ale také restauraci a rekonstrukci starých map.</p>
                        </div>
                        <div className={"about-section"}>
                            <img src={globeIcon} alt={"icon"} className={"about-icon"}/>
                            <p>Dále se zabýváme tvorbou a správou www stránek prestižních firem, optimalizací pro vyhledávače (SEO) a současně dodáváme a zajišťujeme podporu specializovaných výpočetních sestav.</p>
                        </div>
                        <MajitelBio/>
                    </section>
                </div>
            </div>
        );
    }
}

export default About;
