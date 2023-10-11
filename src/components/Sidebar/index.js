import React from 'react'
import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink
                            to="apropos"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            onClick={toggle}>A propos</SidebarLink>
                        <SidebarLink
                            to="parcours"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={toggle}>Parcours</SidebarLink>
                        <SidebarLink
                            to="competences"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={toggle}>Compétences</SidebarLink>
                        <SidebarLink to="projets"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={toggle}>Projets</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/contact'>Contact</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
