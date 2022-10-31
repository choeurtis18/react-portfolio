import React from 'react';

const Container_Introduction = (props) => {
    return (
        <>
        <h2 className="section__title">{props.title}</h2>
        <span className="section__subtitle">{props.subtitle}</span>
        </>
    )
}

export default Container_Introduction;