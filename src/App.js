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
import CV from './media/Label-MEU102934624.pdf';

const nav_list = [
  {id:0, link: "home", name: "Home", icon: "uil uil-home"},
  {id:1, link: "about", name: "About", icon: "uil uil-user"},
  {id:2, link: "skills", name: "Skills", icon: "uil uil-file-alt"},
  {id:3, link: "portfolio", name: "Portfolio", icon: "uil uil-scenery"},
  {id:4, link: "contact", name: "Contactme", icon: "uil uil-message"}
];
const social_list = [
  {id:0, link: "https://www.linkedin.com/in/choeurtis-tchounga-41218a1ab/", icon: "uil uil-linkedin-alt"},
  {id:1, link: "mailto:choeurtis.tchounga@gmail.com", icon: "uil uil-envelope-check"},
  {id:2, link: "https://github.com/choeurtis18", icon: "uil uil-github-alt"},
];
const about_experience_list = [
  {id:0, date: "03+", atribute: "Year experience"},
  {id:1, date: "10+", atribute: "Completed project"},
  {id:2, date: "02+", atribute: "Companies worked"},
];

const work_list = [
  {id:0, name: "UX Developper", company: "B&B Hotels", date: "Septembre 2021 - Septembre 2023", description:"Oat cake bear claw pie muffin muffin bonbon topping. Jujubes toffee dragée oat cake chocolate bar carrot cake dessert wafer cake. Icing jelly-o powder caramels cotton candy dragée oat cake cheesecake jujubes."},
  {id:1, name: "Web Developer", company: "Vitacolo", date: "Avril 2021 - Juin 2021", description:"Oat cake bear claw pie muffin muffin bonbon topping. Jujubes toffee dragée oat cake chocolate bar carrot cake dessert wafer cake. Icing jelly-o powder caramels cotton candy dragée oat cake cheesecake jujubes."}
];
const project_list = [
  {id:0, image: perfil_img, title: "Descartes Fight", description: "Descartes Fight is a Street Fighter remake with as main subject the IUT of paris, the map game is the the iconic place of the IUT an the characters are the member of my project Team. In this game there is 2 game mode, the fist one is a 1 vs CPU and the second mode is a local 1 vs 1.", link: "#"},
  {id:1, image: perfil_img, title: "CFS Location", description:"CFS location is a cars location web site. In this site, people can rent a car and consult the list of cars they have rented. In this site, the is an admin page, the administration of the site can manage (add and delete) the cars and the customers. When a customer goes to his page, he can rent a car, look at his shopping cart, his cars and his invoices.", link: "#"}
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
        title={"Hi, I'am Choeurtis"}
        subtitle={"Web devlopper"}
        content={"Junior web developper, I am still studying and working to become a project manager."}
      />
      
      <About
        image={perfil_img}
        description={"Junior web developper"}
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
        title={"You have a new project"}
        description={"Don't hesitate to contact me :D"}
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
