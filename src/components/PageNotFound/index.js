import React from 'react'
import ImgSvg from '../../image/notfound-image.svg';
import { SuccessBackground, SuccessWrap, Img, Heading, Subtitle, Icon } from './PageNotFoundElements';

const Success = () => {

    return (
        <SuccessBackground>
            <Icon href="/">sly.</Icon>
            <Img alt="success" src={ImgSvg} />
            <SuccessWrap>
                <Heading>Oh désolé !</Heading>
                <Subtitle>La page que vous avez recherché n'existe pas</Subtitle>
            </SuccessWrap>
        </SuccessBackground>
    )
}

export default Success