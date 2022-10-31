import React from 'react';
import Container_Introduction from '../components/Container_Introduction';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Projects = (props) => {
    return (
        <section className="portfolio section" id="portfolio">
            <Container_Introduction
                title="Projects"
                subtitle="my projects"
            />
            
            <div className="portfolio__container container">
            <Swiper 
                navigation={true} 
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }} 
                modules={[Autoplay, Navigation]}
                className="swiper-wrapper"
            >
            {
            props.project_list.map((item) => {
                return (
                    <SwiperSlide key={item.id} className="portfolio__content grid swiper-slide">
                        <img src={item.image} alt="" className="portfolio__img"/>
                        
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">{item.title}</h3>
                            <p className="portfolio__description">{item.description}</p>
                            <a href={item.link} className="button button--flex button--small portfolio__button">
                                Demo
                                <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </SwiperSlide>
                )
            })
            }
            </Swiper>
            </div>
        </section>
    )
}

export default Projects;