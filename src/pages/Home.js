import React from 'react';
import Link_btn from '../components/Link_btn';

const Home = (props) => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                    {
                        props.social_list.map((item) => {
                            return (
                                <a key={item.id} target="_blank" href={item.link} className="home__social-icon">
                                    <i className={item.icon}></i> 
                                </a>
                            )
                        })
                    }
                    </div>

                    <div className="home__img">
                        <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                
                                <image className="home__blob-img" x="-5" y="30" href={props.image}/>
                            </g>
                        </svg>                            
                    </div>
                    
                    <div className="home__data">
                        <h1 className="home__title">{props.title}</h1>
                        <h3 className="home__subtitle">{props.subtitle}</h3>
                        <p className="home__description">
                        {props.content}
                        </p>
                        <Link_btn
                            link="#contact"
                            texte="Me Contacter"
                        />
                    </div>
                </div>

                <div className="home__scroll">
                    <a href="#about" className="home__scroll-button button--flex">
                        <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                        <span className="home__scroll-name">Scroll down</span>
                        <i className="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home;