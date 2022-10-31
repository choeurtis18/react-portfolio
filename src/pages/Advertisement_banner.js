import React from 'react';
import Link_btn from '../components/Link_btn';
const Advertisement_banner = (props) => {
    return (
        <section className="project section">
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <h2 className="project__title">{props.title}</h2>
                        <p className="project__description">{props.description}</p>
                        <Link_btn
                            link="#contact"
                            texte="Contact Me"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advertisement_banner;