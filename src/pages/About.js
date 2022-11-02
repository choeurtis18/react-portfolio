import React from 'react';
import Container_Introduction from '../components/Container_Introduction';
import Download_btn from '../components/Download_btn';

const About = (props) => {
    return (
        <section className="about section" id="about">
            <Container_Introduction
                title="About Me"
                subtitle="who I am ?"
            />
            <div className="about__container container grid">
                <img src={props.image} alt="" className="about__img"/>

                <div className="about__data">
                    <div className="about__description">
                        <p>Hello, my name is Choeurtis and I am a web developer. I started to be interest by computer science in 2018 by learning to code in python. I have created a few small programs and some games.</p><br></br>
                        <p>After that, I did a DUT in computer science at the IUT of Paris. During this DUT, I learned a lot of things about programming and more particularly about back-end development (php, python, JS, java, C, C++ ...) and algorithms. Thereafter, I wanted to specialize in web development so I did a bachelor in web development at Hetic to specialize in web programming.</p><br></br>
                        <p>Now my goal is to improve my project management skills while continuing to gain experience in development to become a Product Owner or continue my adventure as a freelancer.</p><br></br>
                    </div>

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