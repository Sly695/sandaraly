import React from 'react';
import Video from '../../videos/coding-video.mp4';
import { 
HeroContainer,
HeroBg, 
VideoBg, 
HeroContent, 
HeroH1, 
HeroP, 
} from './HeroElements'; 

const HeroSection = () => {

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Bienvenue sur mon portfolio 🚀</HeroH1>
                <HeroP>
                    Vous pourrez retrouver plus à mon propos, mes expériences, mes motivations et plus encore!
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
