import React from 'react';
import Container_Introduction from '../components/Container_Introduction';
import Icon_container from '../components/Icon_container';
import Contact_Form from '../components/Contact_Form';

const Contact_me = (props) => {
    return (
        <section className="contact section" id="contact">
            <Container_Introduction
                title="Contact"
                subtitle="Me Contacter"
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

                <Contact_Form />
            </div>
        </section>
    )
}

export default Contact_me;