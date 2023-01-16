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
                        <p>Ma passion pour l’informatique débute en 2018 lorsque je découvre Python. C’est en m’amusant à créer des petits jeux en python que j’ai décidé de me tourner vers le domaine de l’informatique.</p><br></br>
                        <p>Après le bac, j’ai donc réaliser un DUT informatique à l’IUT de Paris afin de monter en compétences et en apprendre plus sur le domaine. Suite à cela, je me suis spécialiser dans le développement web avec une formation en bachelor web au sein d’Hetic.</p><br></br>
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