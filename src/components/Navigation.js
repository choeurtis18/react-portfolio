import React from 'react';

const Navigation = (props) => {
    const openNav = (e) => {
        /*==================== MENU SHOW Y HIDDEN ====================*/
        const navMenu = document.querySelector('#nav-menu'),
                navToggle = document.querySelector('#nav-toggle'),
                navClose = document.querySelector('#nav-close')

        /*===== MENU SHOW =====*/
        /* Validate if constant exists */
        if(navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu');
            });
        }

        /*===== MENU HIDDEN =====*/
        /* Validate if constant exists */
        if(navClose) {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
            });
        }

        /*==================== REMOVE MENU MOBILE ====================*/
        const navLink = document.querySelectorAll('.nav__link')

        function linkAction(){
            const navMenu = document.querySelector('#nav-menu')
            // When we click on each nav__link, we remove the show-menu class
            navMenu.classList.remove('show-menu')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction))
    }

    const changeBackGround = () => {
        const themeButton = document.getElementById('theme-button')
        const darkTheme = 'dark-theme'
        const iconTheme = 'uil-sun'

        // Previously selected topic (if user selected)
        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')

        // We obtain the current theme that the interface has by validating the dark-theme class
        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

        // We validate if the user previously chose a topic
        if (selectedTheme) {
        // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
        }

        // Activate / deactivate the theme manually with the button
        themeButton.addEventListener('click', () => {
            // Add or remove the dark / icon theme
            document.body.classList.toggle(darkTheme)
            themeButton.classList.toggle(iconTheme)
            // We save the theme and the current icon that the user chose
            localStorage.setItem('selected-theme', getCurrentTheme())
            localStorage.setItem('selected-icon', getCurrentIcon())
        })
    }

    return (
        <nav className="nav container">
            <a href="#" className="nav__logo">{props.user_name}</a>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list grid">
                {
                    props.nav_list.map((item) => {
                        return (
                            <li key={item.id} className="nav__item">
                                <a href={"#"+item.link} className="nav__link active-link">
                                    <i className={item.icon +" nav__icon"}></i> {item.name} 
                                </a>
                            </li>
                        )
                    })
                }
                </ul>
                <i className="uil uil-times nav__close" id="nav-close"></i>
            </div>

            <div className="nav__btns">
                <i className="uil uil-moon change-theme" id="theme-button" onClick={changeBackGround}></i> 

                <div className="nav__toggle" id="nav-toggle" onClick={openNav}>
                    <i className="uil uil-apps"></i> 
                </div>
            </div>
        </nav>
    );
};

export default Navigation;