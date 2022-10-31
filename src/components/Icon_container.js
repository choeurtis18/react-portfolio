import React from 'react';

const Icon_container = (props) => {
    return (
        <div className="contact__information">
            <i className={props.icon}></i>

            <div>
                <h3 className="contact__title">{props.title}</h3>
                <span className="contact__subtitle">{props.texte}</span>
            </div>
        </div>
    )
}

export default Icon_container;