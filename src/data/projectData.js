import leafup_img from '../media/LeafUp11.gif';
import descartes_figth_img from '../media/descartes_figth_img.png';
import aldibnb from '../media/aldibnb.gif';
import cfslocation_img from '../media/cfslocation_img.jpeg';

export const project_list = [
  {
    id:0, 
    image: aldibnb, 
    title: "AldiBnB", 
    description:"AldiBnb est un site de location de bien immobiliers. Il y a 3 types d'utilisateur, l'utilisateur qui consulte les offres et loue des biens. Le modérateur qui gère les utilisateurs ainsi que les offres et l'administrateur qui gère toutes les données et informations du site.", 
    link: "https://github.com/choeurtis18/AldiBnB",
    project_info: ['WordPress', 'PHP', '2022']
  },
  {
    id:1, 
    image: leafup_img, 
    title: "LeafUp-App-Front", 
    description:"Pour mon projet de fin d'année, je devais avec mon équipe créer une serre qui permettra le suivi des caractéristiques physiques de la plante tout en proposant un système d’arrosage automatique pour celle-ci. Nous voulons également créer un mini réseau social afin de créer une communauté qui partagera des conseils et astuces entre les membres.", 
    link: "https://www.canva.com/design/DAFFiWAd-HE/4jeC4PD9qAot61_1bDfE5w/view?utm_content=DAFFiWAd-HE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton#1",
    project_info: ['React', 'TypeScript', '2022']
  },
  {
    id:2, 
    image: descartes_figth_img, 
    title: "Descartes Fight", 
    description: "Descartes Fight est un remake de Street Fighter avec comme sujet principal l'IUT de Paris, les cartes du jeu sont des lieux iconique de l'IUT et les personnages sont les membres de l'équipe de mon projet. Dans ce jeu, il y a 2 modes de jeu, le premier est un 1 contre CPU et le deuxième mode est un 1 contre 1 local.", 
    link: "https://github.com/choeurtis18/DescartesFight",
    project_info: ['GDScript', '2021']
  },
  {
    id:3, 
    image: cfslocation_img, 
    title: "CFS Location", 
    description:"CFS location est un site de location de voiture dans lequel les utilisateurs peuvent consulter et louer des voitures. Ce site possède 2 types de rôle, un administrateur qui gère les voitures et les utilisateurs et un utilisateur qui consulte les véhicules et gérer ses propres annonces.", 
    link: "https://github.com/choeurtis18/PwebLocationVoiture",
    project_info: ['PHP', 'MCV', '2021']
  },
];