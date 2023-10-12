import styled from 'styled-components';

export const ImgSvg = styled.img`
    background-image: url('././image/undraw_winners_re_wr1l.svg')

`;

export const SuccessBackground = styled.div`

    box-sizing: border-box;
    background-image: linear-gradient(to right top, #166141, #14774d, #108f5a, #0aa765, #06bf71);
    display: flex; 
    height: 100vh;
    width: 100vw;


    @media screen and (max-width: 850px){
        flex-direction: column;
    }
`;

export const SuccessWrap = styled.div`
    height: 30%; 
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: auto;
    box-sizing: border-box;
    padding: 20px;
`;

export const Img = styled.img`
    width: 100%;
    height: 50%;
    margin: auto;
`;

export const Heading = styled.h2`
    color: #FFF;
    text-align: left;
    margin: 0;
    font-size: 80px;
    font-weight: normal;

    @media screen and (max-width: 850px){
        font-size: 60px;
        text-align: center;
    }

    @media screen and (max-width: 450px){
        font-size: 50px;
        text-align: center;
    }
`;

export const Span = styled.span`
    font-size: 60px;
`;

export const Subtitle = styled.p`
    color: #033f1e;
    margin: 0;
    text-align: left;
    font-size: 30px;
    font-weight: bold;
    padding: 10px;

    @media screen and (max-width: 850px){
        text-align: center;
        font-size: 20px;
    }

    @media screen and (max-width: 450px){
        font-size: 15px;
        text-align: center;
    }
`;

export const Icon = styled.a`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    &:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`;