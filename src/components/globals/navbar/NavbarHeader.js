import React from 'react'
import { Link } from 'gatsby'
import logo from '../../../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import styled from 'styled-components'
import { styles } from '../../utils/index'

const NavbarHeader = ({ toggleMenu }) => {
    
    return (
        <HeaderWrapper>
            <Link to="/">
                <img src={ logo } alt="Logo company"/>
            </Link>
            <FaAlignRight className="toggle-icon" onClick={ toggleMenu } />
        </HeaderWrapper>
    )
    
}


const HeaderWrapper = styled.div`
    padding: .4rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .toggle-icon {
        font-size: 1.75rem;
        color: ${styles.colors.mainYellow};
        cursor: pointer;
    }

    @media (min-width: 768px) {
        .toggle-icon {
            display: none;
        }
    }
`

export default NavbarHeader