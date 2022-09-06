import React, { Component } from 'react';
import linkedIn from "./img/linkedin.png";
import gitHub from "./img/github.png";
import '../css/Contato.css';

export default class Contato extends Component {
render() {
    const { cssName } = this.props;
    return (
        <div className={cssName}>
            <div>
                <a href="https://github.com/VictorSilva27" target='_blank' rel="noreferrer">
                    <img width='50px' src={gitHub} alt="LinkedIn" />
                    <p>GitHub</p>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/victor-silva-52b085213/" target='_blank' rel="noreferrer">
                    <img width='50px' src={linkedIn} alt="LinkedIn" />
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}
}
