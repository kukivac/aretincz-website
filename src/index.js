import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/style.scss';

import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";
import {PageNotFound, Homepage} from "./components";

class App extends React.Component {

    render() {
        return (
            <React.StrictMode>
                <BrowserRouter>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </React.StrictMode>
        );
    };
}

ReactDOM.render(<App/>, document.getElementById('root'));

