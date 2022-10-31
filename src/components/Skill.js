import React from 'react';

const Skill = (props) => {
    return (
        <span key={props.key} className="skill-child">{props.value}</span>
    )
}

export default Skill;