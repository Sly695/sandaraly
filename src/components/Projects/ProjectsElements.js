import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #3ABF70;
    padding: 100px;
    box-sizing: border-box;

    @media screen and (max-width: 900px){
        padding: 30px;
    }
`;

export const Carousel = styled.div`
    width: 100%;
    height: 70%;
    max-width: 1000px;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 0;
    display: flex;
`;


export const ProjectsCard = styled.div`
    min-width: 350px;
    height: 100%;
    background: #FFF;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    margin: auto 10px;
    position: relative;
    z-index: 10;
    padding: 30px;
    box-sizing: border-box;
    justify-content: space-between;
    overflow: hidden;

    @media screen and (max-width: 900px){
        min-width: 95%;
    }

`;

// TYPE 

export const ProjectsType = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    font-weight: bold;
    color: gold;
    font-size: 15px;
    align-content: center;
    justify-content: middle;
    line-height: 22px;
    color: ${({ projetType }) => (projetType === "Pro" ? `gold` : projetType === "Perso" ? "#CD7F31" : "#C0C0C0")};

`;

// HEADER

export const ProjectsCardHeader = styled.div`
    display: flex;
    height: 30%;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`;

export const ProjectsIcon = styled.img`
    width: 50%;
    height: 100%;
    margin: auto;
`;

export const ProjectsCardPresentation = styled.img`
    width: 50%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    margin: auto;
`;

// BODY

export const ProjectsCardBody = styled.div`
    width: 100%;
    padding: 10px;
    height: 150px;
`;


export const ProjectsCardDesc = styled.li`
    font-size: 12px;
    display: flex;
    width: 100%;
    margin: 0;
    list-style-type: disc;
`;

export const ProjectsCardSpan = styled.span`
    font-weight: bold;
    color: #3ABF70;
    padding-right: 2px;
    font-size: 12px;
    
`;

// FOOTER

export const ProjectsCardFooter = styled.div`
    width: 100%;
    display: flex;
    height: 30px;
    justify-content: space-between;
    box-sizing: border-box;
    font-size: 12px;

`;

export const ProjectsCardLink = styled.a`
    text-decoration: none;
    color: #3ABF70;
    font-size: 12px;
    font-weight: bold;
    text-decoration: underline;

    &:hover{
        cursor: pointer;
    }
`;

// Modal


export const ProjectsCardDetails = styled.div`
    position: absolute;
    background-color: #010606;
    width: 90%;
    height: 100%;
    bottom: -90%;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;

    &:hover{
        cursor: pointer;
        transform: translateY(-85%);
        transition-duration: 300ms;
    }
`;



export const ProjectsMoreDetailsTitle = styled.p`
    margin: 0px auto 0;
    color: #FFF;
    font-weight: bold;
    font-size: 14px;
`;

export const ProjectsMoreDetailsList = styled.ul`
    box-sizing: border-box;
    width: 100%;
`;

export const ProjectsMoreDetailsItem = styled.li`
    font-size: 14px;
    color: #FFF;
`;









