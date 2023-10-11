import styled from "styled-components";
import blob1 from '../../image/blob-haikeiGrey.svg';
import blob2 from '../../image/blob-haikeiGreen.svg';
import blob3 from '../../image/blob-haikeiGreen.svg';
import blob4 from '../../image/blob-haikeiGrey.svg';
// import BarSvg from '../../image/Bar.svg'


export const InfoContainer = styled.div`
    position: relative;
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : "#010606")};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    width: 80%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas : ${({ imgStart }) => imgStart ? `'col2 col1 '` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }

`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px; 
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #01bf71;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    z-index: 100;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    z-index: 100;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    };
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    z-index: 1;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const InfoWrapperTriangle = styled.div`
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    fill: #010606;
    display: ${({ displayTriangle }) => (displayTriangle ? "block" : "none")}};
}`;

export const InfoWrapperWave = styled.div`
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    fill: #010606;
    display: ${({ displayWave }) => (displayWave ? "block" : "none")}};
`;

export const InfoWrapperTilt = styled.div`
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    fill: #010606;
    display: ${({ displayTilt }) => (displayTilt ? "block" : "none")}};

`;

export const SvgTilt = styled.svg`
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 190px;
`;

export const InfoWrapperTiltBis = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 2;
`;

export const BarSvg = styled.svg`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0%, 50%);
    display: ${({ displayBar }) => (displayBar ? "block" : "none")}};
`;



export const Bar2 = styled.div`
    width: 30%;
    height: 10%;
    border-radius: 0 50px 50px 0;
    background-color: #010606;;
    position: absolute;
    bottom: 0;
    transform: translate(-10%, 100%) rotate(4deg);
    display: ${({ displayBar2 }) => (displayBar2 ? "block" : "none")}};
    z-index: 2;
`;

export const BarTitle = styled.p`
    font-size: 6.9vw;
    margin: auto;
    text-align: right;
    font-weight: 700;
    transform: translate(-35%, 80%) rotate(4deg);
    color: #F9F9F9;
    text-shadow: -2px -2px 2px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
    display: ${({ barTitle }) => (barTitle ? "block" : "none")}};

    @media screen and (max-width: 1200px){
        transform: translate(-15%, 100%) rotate(4deg);
    }

    @media screen and (max-width: 1000px){
        transform: translate(-15%, 100%) rotate(4deg);
    }

    @media screen and (max-width: 768px){
        transform: translate(-15%, 280%) rotate(4deg);
    }

    @media screen and (max-width: 550px){
        transform: translate(-10%, 320%) rotate(4deg);
    }

    @media screen and (max-width: 400px){
        transform: translate(-10%, 420%) rotate(4deg);
    }
`;

export const InfoWrapperBlob = styled.div`
    background-image: url(${blob1});
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    height: 200px;
    width: 200px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transform: translate(20%, 250%);
    opacity: 0.5;
    display: ${({ displayBlob }) => (displayBlob ? "block" : "none")}};
`;

export const InfoWrapperBlob2 = styled.div`
    background-image: url(${blob2});
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    height: 300px;
    width: 300px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transform: translate(40%, -10%);
    opacity: 0.5;
    display: ${({ displayBlob2 }) => (displayBlob2 ? "block" : "none")}};

    @media screen and (max-width: 1000px){
        height: 150px;
        width: 150px;
    }
`;

export const InfoWrapperBlob3 = styled.div`
    background-image: url(${blob3});
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    height: 200px;
    width: 200px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transform: translate(30%, 0%);
    opacity: 0.5;
    display: ${({ displayBlob3 }) => (displayBlob3 ? "block" : "none")}};
`;


export const InfoWrapperBlob4 = styled.div`
    background-image: url(${blob4});
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    height: 250px;
    width: 250px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transform: translate(0%, 80%);
    opacity: 0.5;
    z-index: 1;
    display: ${({ displayBlob4 }) => (displayBlob4 ? "block" : "none")}};

`;


