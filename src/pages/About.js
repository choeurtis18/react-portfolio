import React from 'react';
import Container_Introduction from '../components/Container_Introduction';
import Download_btn from '../components/Download_btn';

const About = (props) => {
    return (
        <section className="about section" id="about">
            <Container_Introduction
                title="About Me"
                subtitle="My introduction"
            />
            <div className="about__container container grid">
                <img src={props.image} alt="" className="about__img"/>

                <div className="about__data">
                    <p className="about__description">{props.description}r</p>

                    <div className="about__info">
                    {
                        props.about_experience_list.map((item) => {
                            return (
                                <div key={item.id}>
                                    <span className="about__info-title">{item.date}</span>
                                    <span className="about__info-name">{item.atribute}</span>
                                </div>
                            )
                        })
                    }
                    </div>

                    <Download_btn
                        className="about__buttons"
                        link={props.cv_link}
                        texte="Download CV"
                    />
                </div>
            </div>
        </section>
    )
}

export default About;