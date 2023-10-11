import React from 'react';
import { Button } from '../ButtonElement';
import {
    BtnWrap,
    Column1,
    Column2,
    Heading,
    ImgWrap,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Subtitle,
    TextWrapper,
    TopLine,
    Img,
    InfoWrapperTriangle,
    InfoWrapperWave,
    InfoWrapperTilt,
    SvgTilt,
    InfoWrapperBlob,
    InfoWrapperBlob2,
    InfoWrapperBlob3,
    BarSvg,
    BarTitle,
    InfoWrapperBlob4
} from './InfoElements';


const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2,
    displayTriangle,
    displayWave,
    displayTilt,
    displayBar,
    displayBlob,
    displayBlob2,
    displayBlob3,
    displayBlob4,
    barTitle
}) => {

    function handleClick(buttonLabel) {
        switch (buttonLabel) {
            case "Télécharger mon CV":
                window.open('https://drive.google.com/file/d/1ZqRrsPa9usIX5qd4K5oPcnhMpZ_bHkjp/view?usp=sharing', '_blank');
                break;
            case "MERN":
                window.open('https://www.mongodb.com/mern-stack', '_blank');
                break;
            case "Mes projets":
                window.open('https://www.mongodb.com/mern-stack', '_blank');
                break;
            // Add more cases as needed
            case "Mon GitHub":
                window.open('https://github.com/Sly695', '_blank');
                break;
            default:
                // Default case if none of the above matches
                break;
        }
    }


    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button
                                        onClick={() => (handleClick(buttonLabel))}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        display={buttonLabel ? "none" : "none"}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
                <InfoWrapperTriangle displayTriangle={displayTriangle}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </InfoWrapperTriangle>
                <InfoWrapperWave displayWave={displayWave}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </InfoWrapperWave>
                <InfoWrapperTilt displayTilt={displayTilt}>
                    <SvgTilt data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                    </SvgTilt>
                </InfoWrapperTilt>
                <InfoWrapperBlob displayBlob={displayBlob}></InfoWrapperBlob>
                <InfoWrapperBlob2 displayBlob2={displayBlob2}></InfoWrapperBlob2>
                <InfoWrapperBlob3 displayBlob3={displayBlob3}></InfoWrapperBlob3>
                <InfoWrapperBlob4 displayBlob4={displayBlob4}></InfoWrapperBlob4>
                <BarSvg displayBar={displayBar} viewBox="0 0 1512 257" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.5L1512.5 107.25V256.75L0 152V77V0.5Z" fill="#01BF71" />
                </BarSvg>
                <BarTitle barTitle={barTitle}>MES PROJETS</BarTitle>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
