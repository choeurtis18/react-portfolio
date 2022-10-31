import React from 'react';

const Download_btn = (props) => {
    return (
        <div className={props.class}>
            <a download="" href={props.link} className="button button--flex">
                {props.texte}<i className="uil uil-download-alt button__icon"></i>
            </a>
        </div>
    )
}

export default Download_btn;