import React from 'react';
import Container_Introduction from '../components/Container_Introduction';
import Skill from '../components/Skill';

const Skills = (props) => {
    return (
        <section className="skills section" id="skills">
            <Container_Introduction
                title="Skills"
                subtitle="My skills"
            />
            
            <div className="skills__container container">
                {
                    props.skills_list.map((item, index) => {
                        return (
                            <Skill key={index} value={item} />
                        )
                    })  
                }
                
            </div>
        </section>
    )
}

export default Skills;