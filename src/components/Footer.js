import React from 'react';

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Choeurtis</h1>
                        <span className="footer__subtitle">Web Developper</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#about" className="footer__link">About</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#skills" className="footer__link">Skills</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">Contact Me</a>
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

                <p className="footer__copy">&#169; Choeurtis. All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer;