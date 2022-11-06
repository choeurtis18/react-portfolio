import React from 'react';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Qualification from './pages/Qualification';
import Advertisement_banner from './pages/Advertisement_banner';
import Projects from './pages/Projects';
import Contact_me from './pages/Contact_me';
import Footer from './components/Footer';

import Choeurtis_draw_img from './media/choeurtis_draw.png';
import perfil_img from './media/perfil.jpg';
import CV from './media/CV-Choeurtis.pdf';
import { work_list } from './data/workData';
import { project_list } from './data/projectData';
import { offer_list } from './data/offerData';

const nav_list = [
  {id:0, link: "home", name: "Accueil", icon: "uil uil-home"},
  {id:1, link: "about", name: "A propos", icon: "uil uil-user"},
  {id:2, link: "skills", name: "Skills", icon: "uil uil-file-alt"},
  {id:3, link: "portfolio", name: "Projets", icon: "uil uil-scenery"},
  {id:4, link: "contact", name: "Me Contacter", icon: "uil uil-message"}
];
const social_list = [
  {id:0, link: "https://www.linkedin.com/in/choeurtis-tchounga-41218a1ab/", icon: "uil uil-linkedin-alt"},
  {id:1, link: "mailto:choeurtis.tchounga@gmail.com", icon: "uil uil-envelope-check"},
  {id:2, link: "https://github.com/choeurtis18", icon: "uil uil-github-alt"},
];
const about_experience_list = [
  {id:0, date: "03+", atribute: "Années d'expérience"},
  {id:1, date: "10+", atribute: "Projets terminés"},
  {id:2, date: "02+", atribute: "Compagnies où j'ai travaillé"},
];
const skills_list = [
  'HTML', 'JAVASCRIPT', 'JQUERY',
  'REACT', 'PYTHON', 'PHP', 'CSS',
  'Jira', 'NODEJS', 'JAVA',
  'Team Manage', 'SQL'
];

const App = () => {
  return (
    <>
    <header className="header" id="header">
      <Navigation
        user_name={"Choeurtis"}
        nav_list={nav_list}
      />
    </header>

    <main className="main">
      <Home
        social_list={social_list}
        image={Choeurtis_draw_img}
        title={"Hello, moi c'est Choeurtis"}
        subtitle={"Developpeur Web"}
        content={"Je suis un développeur web junior au profil polyvalent avec des compétences front-end ainsi que des compétences back-end. Mon objectif est maintenant d'améliorer mes compétences en gestion de projet tout en continuant à gagner de l'expérience en développement."}
      />
      
      <About
        image={perfil_img}
        about_experience_list={about_experience_list}
        cv_link={CV}
      />

      <Skills
        skills_list={skills_list}
      />
      
      <Qualification
        work_list={work_list}
      />

      <Advertisement_banner
        title={"Une idée de projet !"}
        description={"N'hésitez pas à me contacter :D"}
        offer_list={offer_list}
      />

      <Projects
        project_list={project_list}
      />

      <Contact_me />

      <Footer />
    </main>
    </>
  );
}

export default App;
