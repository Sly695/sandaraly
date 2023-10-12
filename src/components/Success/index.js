import React from 'react'
import ImgSvg from '../../image/undraw_winners_re_wr1l.svg';
import { SuccessBackground, SuccessWrap, Img, Heading, Subtitle, Icon } from './SucessElements';

const Success = () => {

    return (
        <SuccessBackground>
            <Icon href="/">sly.</Icon>
            <Img alt="success" src={ImgSvg} />
            <SuccessWrap>
                <Heading>Merci à vous !</Heading>
                <Subtitle>Votre message a été envoyé avec succès, <br />je vous répondrais dans les plus bref délais</Subtitle>
            </SuccessWrap>
        </SuccessBackground>
    )
}

export default Success