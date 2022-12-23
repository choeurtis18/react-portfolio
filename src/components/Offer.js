import React from 'react';

export default function Offer({offer, setPopin_data, setPopin_visible}) {

    return (
        <div className="project__info_item">
            <span className="project__info_item-title">{offer.title}</span>            
            <div className="project__info_item-options">
            {
                offer.options.map((item, index) => {
                    return (
                        <span key={index}><i className="uil uil-check-circle"></i> {item}</span>
                    )
                })
            }
            </div>
            <span className="project__info_item-description">{offer.description}</span>
            <button className="button project__info_item-details-btn" onClick={function() {setPopin_data(offer.title); setPopin_visible(true) }}>Plus d'information</button>

        </div>
    )
}