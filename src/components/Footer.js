import React from 'react';
import { useState } from 'react';

import MentionsLegales from '../pages/MentionsLegales';

const Footer = (props) => {
    const [popin_visible, setPopin_visible] = useState(false);

    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Choeurtis</h1>
                        <span className="footer__subtitle">Développeur Web</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#about" className="footer__link">A propos</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">Projets</a>
                        </li>
                        <li>
                            <a href="#skills" className="footer__link">Skills</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">Me Contacter</a>
                        </li>
                    </ul>

                    <div className="footer__socials">
                        <a href="https://github.com/choeurtis18" target="_blank" rel="noreferrer" className="footer__social">
                            <i className="uil uil-github-alt"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/choeurtis-tchounga-41218a1ab/" target="_blank" rel="noreferrer" className="footer__social">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                    </div>
                </div>

                <p className="footer__copy" to="/legal" onClick={() => setPopin_visible(true)}>&#169; Choeurtis. tous droits réservé - Mentions légales</p>
                <MentionsLegales popin_visible={popin_visible} setPopin_visible={setPopin_visible}/>
            </div>
        </footer>
    )
}

export default Footer;