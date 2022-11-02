import React from 'react';

const Offer = (props) => {
    return (
        <div className="project__info_item">
            <span className="project__info_item-title">{props.item.title}</span>
            <span className="project__info_item-description">{props.item.description}</span>
            <button className="button project__info_item-details-btn">More details</button>
            <div className="project__info_item-options">
            {
                props.item.options.map((item, index) => {
                    return (
                        <span key={index}><i class="uil uil-check-circle"></i> {item}</span>
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default Offer;