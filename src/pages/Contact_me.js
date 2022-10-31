import React from 'react';
import Container_Introduction from '../components/Container_Introduction';
import Icon_container from '../components/Icon_container';

const Contact_me = (props) => {
    return (
        <section className="contact section" id="contact">
            <Container_Introduction
                title="Contact"
                subtitle="Contact Me"
            />

            <div className="contact__container container grid">
                <div>
                    <Icon_container
                        icon="uil uil-envelope contact__icon"
                        title="Email"
                        texte="choeurtis.tchounga@gmail.com"
                    />

                    <Icon_container
                        icon="uil uil-map-marker contact__icon"
                        title="Location"
                        texte="Paris"
                    />
                </div>

                <form action="" className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label className="contact__label">Name</label>
                            <input type="text" className="contact__input"/>
                        </div>
                        <div className="contact__content">
                            <label className="contact__label">Email</label>
                            <input type="email" className="contact__input"/>
                        </div>
                        <div className="contact__content">
                            <label className="contact__label">Message</label>
                            <textarea name="" id="" cols="0" rows="7" className="contact__input"></textarea>
                        </div>

                        <div>
                            <a href="#" className="button button--flex">
                                Send Message 
                                <i className="uil uil-message button__icon"></i>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact_me;