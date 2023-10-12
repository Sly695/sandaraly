import Icon1 from '../../image/healthcar.svg'
import Icon3 from '../../image/svg5.svg'
import Medicine from '../../image/medicine.svg'
import Fun from '../../image/fun.svg'
import Clean from '../../image/clean.svg'
import Jenee from '../../image/jenee-logo.svg'
import LogoNef from '../../image/LogoNEF.svg'
import Chat from '../../image/chat.svg'
import Website from '../../image/website.svg'
import TextMii from '../../image/TextMii.svg'
import Mygallery from '../../image/mygallery.png'
import debianlogo from '../../image/debian-logo.webp'
import nginx from '../../image/nginx-logo.png'

export const projetsList = [
    {
        logo: Jenee,
        cover: Fun,
        type: "Pro",
        projet: 'Jenee',
        context: "2 mois : Stagiaire Développeur Front-End - Chez Jenee Start-up événementielle pour les étudiants",
        tasks: "Implémentation de la landing page et webapp",
        team: "1 CTO + 1 développeurs",
        website: "",
        git: "",
        details: [
            "Travail en Agile Scrum ( Tickets, Deadlines )",
            "Technologies : React.js Material UI, SASS et Style BEM, Redux",
            "Respect de l'architecture React - Common Layout Pages Shared",
            "Respect de l'architecture de Style",
            "Tests unitaires et fonctionnel avec JEST",
            "Tests Ends-to-end avec CYPRESS",
            "Collaborations avec le designer de la maquette",
            "Respect du côté responsive de l'application",
            "Méthodes de code : prettier, eslint, jsdoc, proptypes",
        ]
    },
    {
        logo: LogoNef,
        cover: Clean,
        type: "Pro",
        projet: 'NEF HYGIÈNE',
        context: "Freelance pour NH Entreprise de nettoyage pour particuliers et professionnels",
        tasks: "Implémentation, déploiement, hébergement et maintenance du site vitrine",
        team: "1 développeur fullstack + CEO",
        website: "http://www.nefhygiene.fr",
        git: "",
        details: [
            "Technologies : React.js, Express.js, Node.js, Styled-Components",
            "Collaboration sur le design de l'application avec le CEO",
            "Déploiement : Google Domains, Heroku",
            "Figma"
        ]
    },
    {
        logo: debianlogo,
        cover: nginx,
        type: "Perso",
        projet: 'Portfolio',
        context: "1 mois : création d'un portfolio et le déployer sur un serveur nginx ",
        tasks: "Implémenter le côté front-end du portfolio, déployer le projet sur un serveur web nginx et implémenter la sécurité autour de l'application mais aussi de l'application",
        team: "développeurs",
        website: "https://sandaraly.fr",
        git: "https://github.com/Sly695/sandaraly",
        details: [
            "Technologies front : react, styled components",
            "Infrastructure: nginx, proxy, reverse proxy, ssl, ssh : clé rsa, sécurité",
            "Hardware: raspberrypi",
            "Software: Linux, Debian"
        ]
    },
    {
        logo: Icon1,
        cover: Medicine,
        type: "School",
        projet: 'HealthCar',
        context: "Projet final de formation: WebApp de réservation d'ambulance pour personnels soignants.",
        tasks: "Implémentation de la map interactive : estimation de temps et traçage d'un itinéraires entre de marqueurs géocalisés.",
        team: "3 développeurs FullStack",
        website: "",
        git: "https://github.com/Sly695/healthcar",
        details: [
            "Technologies : React.js, Express.js, MongoDb, Node.js, Redux",
            "AntDesign, React-router-dom",
            "APIs / WebServices utilisés : OpenCageData, GéoServices IGN",
            "ReactLeaflet",
            "Travail en équipe : Trello, Git / Github, Discord",
            "Test unitaires avec JEST",
            "Divers : socket.io, Bcrypt",
        ]
    },
    {
        logo: Mygallery,
        cover: Icon3,
        type: "Perso",
        projet: 'myGallery',
        context: "Projet autodidacte - Webapp social de librairie photos et vidéos",
        tasks: "Implémentation d'upload de photos et vidéos et intéractions entre utilisateurs ( likes ou commentaires ) + déploiement",
        team: "1 développeur",
        website: "",
        git: "https://github.com/Sly695/myGalleryApp",
        details: [
            "Technologies : React.js Styled Component, MongoDb, CloudApi",
            "Redux, Websocket",
            "Problématiques résolues :",
            "Stocker des images dans la bdd",
            "Fluidifier l'affichage des images : utilisations d'un cloud",
        ]
    },
    {
        logo: TextMii,
        cover: Chat,
        type: "Perso",
        projet: 'TextMii',
        context: "Projet autodidacte - WebApp de chat en temps réels",
        tasks: "Implémentation d'un sign in et d'une messagerie entre utilisateurs connectés + déploiement",
        team: "1 développeur",
        website: "",
        git: "https://github.com/Sly695/TextMii",
        details: [
            "Technologies : React.js Styled Component",
            "Socket.io : Websocket",
            "Problématiques résolues :",
            "Ne plus se servir de la room id mais de l'id user"
        ]
    },
    {
        logo: "",
        cover: Website,
        type: "Perso",
        projet: 'ResponslyWebsite',
        context: "Reproduction maquette FIGMA en HTML CSS",
        tasks: "Implémentation du site + responsive + déploiement",
        team: "1 développeur",
        website: "",
        git: "https://github.com/Sly695/responsivewebsite",
        details: [
            "Technologies : React.js, Styled Component, html, css, flexbox media queries",
            "Respect des côtes de la maquette et du côté responsive",
        ]
    },
]