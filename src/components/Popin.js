import React from 'react';
import Contact_Form from './Contact_Form';

export default function Popin({popin_visible, popin_data, setPopin_visible}) {

    return (
        <div className={"project__form" + " "+(popin_visible ? "form-visible" : "")}>
            
            <div className="project__form__container">
                <button className="project__form__container_close" onClick={() => setPopin_visible(false)}>x</button>
                <h3>Parlez-moi de votre projet</h3>
                <Contact_Form subject={popin_data} placeholder="Bonjour, je souhaiterais créer un site internet dans le but de ..."/>
            </div>
        </div>
    )
}
