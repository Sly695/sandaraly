import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
// import { Carousel } from 'antd';

import {
    ProjectsCard,
    ProjectsContainer,
    ProjectsIcon,
    ProjectsType,
    ProjectsCardHeader,
    ProjectsCardBody,
    ProjectsCardDesc,
    ProjectsCardSpan,
    ProjectsCardPresentation,
    ProjectsCardFooter,
    ProjectsCardLink,
    Carousel,
    ProjectsCardDetails,
    ProjectsMoreDetailsTitle,
    ProjectsMoreDetailsList,
    ProjectsMoreDetailsItem
} from './ProjectsElements';

import { projetsList } from './data';

const Projects = () => {

    return (
        <ProjectsContainer>
            <Carousel>
                {
                    projetsList.map((projet, i) => {
                        return (<ProjectsCard key={projet.projet}>
                            <ProjectsType projetType={projet.type}><VerifiedIcon />{projet.type}</ProjectsType>
                            <ProjectsCardHeader>
                                <ProjectsIcon src={projet.cover} />
                                <ProjectsCardPresentation src={projet.logo} style={{ display: projet.logo === "" ? "none" : "block" }} />
                            </ProjectsCardHeader>
                            <ProjectsCardBody>
                                <ProjectsCardSpan>Projet :</ProjectsCardSpan>
                                <ProjectsCardDesc> {projet.projet}</ProjectsCardDesc>
                                <ProjectsCardSpan>Contexte :</ProjectsCardSpan>
                                <ProjectsCardDesc> {projet.context}</ProjectsCardDesc>
                                <ProjectsCardSpan>Tâches :</ProjectsCardSpan>
                                <ProjectsCardDesc>{projet.tasks}</ProjectsCardDesc>
                                <ProjectsCardSpan>Équipe :</ProjectsCardSpan>
                                <ProjectsCardDesc> {projet.team}</ProjectsCardDesc>
                            </ProjectsCardBody>
                            <ProjectsCardFooter>
                                <ProjectsCardLink style={{ color: projet.git === "" ? "grey" : "#3ABF70" }} to={projet.git}>Lien Github</ProjectsCardLink>
                                <ProjectsCardLink style={{ color: projet.website === "" ? "grey" : "#3ABF70" }} href={projet.website}>Site</ProjectsCardLink>
                            </ProjectsCardFooter>
                            <ProjectsCardDetails>
                                <ProjectsMoreDetailsTitle>Plus de détails</ProjectsMoreDetailsTitle>
                                <ProjectsMoreDetailsList>
                                    {
                                        projet.details.map((detail, i) => {
                                            return <ProjectsMoreDetailsItem key={i}>{detail}</ProjectsMoreDetailsItem>
                                        })
                                    }
                                </ProjectsMoreDetailsList>
                            </ProjectsCardDetails>
                        </ProjectsCard>)
                    })
                }
            </Carousel>
        </ProjectsContainer>

    )
}

export default Projects
