import React, { useState }  from 'react';
import Container_Introduction from '../components/Container_Introduction';


export default function Qualification({work_list}) {
    const [qualification_id, setQualification_id] = useState(0);
    
    return (
        <section className="qualification section">
            <Container_Introduction
                title="Où est-ce que j'ai travaillé et étudié ?"
                subtitle="Mon parcours"
            />
            
            <div className="qualification__container container">
                <div className="qualification__nav">
                {
                    
                    work_list.map((item) => {
                        if(item.id === qualification_id) {
                            return (
                            <button key={item.id} className="qualification__nav_item active" onClick={() => setQualification_id(item.id)}>
                                {item.company}
                            </button>
                            )
                        } else {
                            return (
                            <button key={item.id} className="qualification__nav_item" onClick={() => setQualification_id(item.id)}>
                                {item.company}
                            </button>
                            )
                        }
                    })
                }
                </div>
                <div className="qualification__content_container">
                    <h3 className="qualification__content_container_title">{work_list[qualification_id].name}</h3>
                    <p className="qualification__content_container_subtitle">{work_list[qualification_id].date}</p>
                    <p className="qualification__content_container_content">{work_list[qualification_id].description}</p>
                </div>
                
            </div>
        </section>
    )
  
}