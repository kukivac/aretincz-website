import {Component} from "react";

class PageNotFound extends Component {

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
