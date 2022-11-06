import React, {useState} from 'react';
import Offer from '../components/Offer';
import Popin from '../components/Popin';

const Advertisement_banner = (props) => {
    const [popin_data, setPopin_data] = useState("Site Vitrine + Maintenance");
    const [popin_visible, setPopin_visible] = useState(false);

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
                                    <Offer key={item.id} offer={item} setPopin_data={setPopin_data} setPopin_visible={setPopin_visible}></Offer>
                                )
                            })
                        }
                        </div>

                        <Popin popin_data={popin_data} popin_visible={popin_visible} setPopin_visible={setPopin_visible}></Popin>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advertisement_banner;