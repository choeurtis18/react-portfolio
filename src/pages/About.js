import React from 'react';
import Container_Introduction from '../components/Container_Introduction';
import Download_btn from '../components/Download_btn';

const About = (props) => {
    return (
        <section className="about section" id="about">
            <Container_Introduction
                title="A propos de moi"
                subtitle="Qui suis-je ?"
            />
            <div className="about__container container grid">
                <img src={props.image} alt="" className="about__img"/>

                <div className="about__data">
                    <div className="about__description">
                        <p>Bonjour, je m'appelle Choeurtis et je suis développeur web. J'ai commencé à m'intéresser à l'informatique en 2018 en apprenant à coder en python. J'ai créé quelques petits programmes et quelques jeux.</p><br></br>
                        <p>Après cela, j'ai fait un DUT en informatique à l'IUT de Paris. Durant ce DUT, j'ai appris beaucoup de choses sur la programmation et plus particulièrement sur le développement back-end (php, python, JS, java, C, C++...) et en algorithmie. Par la suite, j'ai voulu me spécialiser dans le développement web, j'ai donc fait un bachelor en développement web à Hetic pour me spécialiser dans la programmation web.</p><br></br>
                        <p>Mon objectif est maintenant d'améliorer mes compétences en matière de gestion de projet tout en continuant à acquérir de l'expérience dans le domaine du développement pour devenir Product Owner ou poursuivre mon aventure en tant que freelance.</p><br></br>
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
                        texte="Télécharger CV"
                    />
                </div>
            </div>
        </section>
    )
}

export default About;