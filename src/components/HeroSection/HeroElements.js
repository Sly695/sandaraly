import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0:
    left: 0;
    width: 100vw:
    height: 100vh;
`;

export const VideoBg = styled.video`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;   
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

export const HeroH1 = styled.h1`
    color: #3ABF70;
    font-size: 48px;
    text-align: center;
    margin: 0;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    color: #fff;
    font-size: 1em;
    max-width: 80%;
    text-align: center;
    font-weight: bold;
    margin: 0;
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    dispaly: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
`;


export const CurveAsym = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    fill: #F9F9F9;
`;

export const CurveAsymSvg = styled.svg`
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 366px;
`;





