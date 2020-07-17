import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import menuLinks from '../../../constants/menuLinks'
import { styles } from '../../utils/index'

const NavbarLinks = ({ isOpen, toggleMenu }) => {
    
    return (
        <LinkWrapper className={ isOpen ? 'isOpen' : '' }>
            {
                menuLinks.map(link => {
                    return (
                        <li key={ link.id }>
                            <Link className="nav-link" to={ link.path }>{ link.name }</Link>
                        </li>
                    )
                })
            }
        </LinkWrapper>
    )
    
}

const LinkWrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    height: 0;
    overflow: hidden;
    ${styles.transDefault};

    &.isOpen {
        height: 152px;
    }

    .nav-link {
        display: block;
        text-decoration: none;
        padding: .5rem 1rem .5rem 1rem;
        color: ${styles.colors.mainGrey};
        text-transform: capitalize;
        font-weight: 700;
        ${styles.transDefault};

        &:hover {
            background: ${styles.colors.mainGrey};
            color: ${styles.colors.mainYellow};
            padding: .5rem 1rem .5rem 1.3rem;
        }
    }
`

export default NavbarLinks