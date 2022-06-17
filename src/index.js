import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/style.scss';

import {
    Header, Footer, Contact, MobileNav, Projektypage, Mainpage
} from "./components/index.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <BrowserRouter>
                    <div className="App">

                        <Routes>
                            <Route path="/" element={<Mainpage />} />
                            <Route path="/projekty" element={<Projektypage />} />
                        </Routes>

                      </div>
                </BrowserRouter>
            </React.StrictMode>
        );
    }
    ;
}

ReactDOM.render(<App/>, document.getElementById('root'));

export {App};