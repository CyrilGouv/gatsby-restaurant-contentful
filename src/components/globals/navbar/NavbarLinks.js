import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import menuLinks from '../../../constants/menuLinks'
import { styles } from '../../utils/index'

const NavbarLinks = ({ isOpen, toggleMenu }) => {
    
    return (
        <LinkWrapper open={ isOpen }>
            <ul>
                {
                    menuLinks.map(link => {
                        return (
                            <li key={ link.id }>
                                <Link className="nav-link" to={ link.path }>{ link.name }</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </LinkWrapper>
    )
    
}

const LinkWrapper = styled.div`

`

export default NavbarLinks