import React from 'react';

const Footer = (props) => {
    return (
        <footer class="footer">
            <div class="footer__bg">
                <div class="footer__container container grid">
                    <div>
                        <h1 class="footer__title">Choeurtis</h1>
                        <span class="footer__subtitle">Web Developper</span>
                    </div>

                    <ul class="footer__links">
                        <li>
                            <a href="#about" class="footer__link">About</a>
                        </li>
                        <li>
                            <a href="#portfolio" class="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#skills" class="footer__link">Skills</a>
                        </li>
                        <li>
                            <a href="#contact" class="footer__link">Contact Me</a>
                        </li>
                    </ul>

                    <div class="footer__socials">
                        <a href="https://github.com/choeurtis18" target="_blank" class="footer__social">
                            <i class="uil uil-github-alt"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/choeurtis-tchounga-41218a1ab/" target="_blank" class="footer__social">
                            <i class="uil uil-linkedin-alt"></i>
                        </a>
                    </div>
                </div>

                <p class="footer__copy">&#169; Choeurtis. All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer;