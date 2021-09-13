import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Navbar from "./utils/Navbar";
import ReactPlayer from 'react-player';




export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="video">
                    <ReactPlayer className="video-player" url="https://www.youtube.com/watch?v=rFwRO4F1Cdg" />
                </div>
            </div>
        );

    }
}

const appDiv = document.getElementById('root');

render(<App />, appDiv);