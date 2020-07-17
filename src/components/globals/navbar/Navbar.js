import React from 'react'

import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import NavbarIcons from './NavbarIcons'

import styled from 'styled-components'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <NavWrapper>
            <NavbarHeader toggleMenu={ toggleMenu } />
            <NavbarLinks isOpen={ isOpen } toggleMenu={ toggleMenu }/>
            <NavbarIcons />
        </NavWrapper>
    )
    
}


const NavWrapper = styled.nav`
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
    }
`

export default Navbar