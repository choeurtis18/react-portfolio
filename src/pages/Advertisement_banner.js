import React from 'react';
import Offer from '../components/Offer';

const Advertisement_banner = (props) => {
    return (
        <section className="project section">
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <h2 className="project__title">{props.title}</h2>
                        <p className="project__description">{props.description}</p>

                        <div className="project__info">
                        {
                            props.offer_list.map((item) => {
                                return (
                                    <Offer key={item.id} item={item}></Offer>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advertisement_banner;