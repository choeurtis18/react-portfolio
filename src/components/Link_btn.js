import React from 'react';

const Link_btn = (props) => {
    return (
        <a href={props.link} className="button button--flex">
            {props.texte}
            <i className="uil uil-message project__icon button__icon"></i>
        </a>
    )
}

export default Link_btn;