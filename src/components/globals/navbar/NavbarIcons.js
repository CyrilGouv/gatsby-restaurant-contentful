import React from 'react'
import styled from 'styled-components'
import { styles } from '../../utils/index'
import socialIcons from '../../../constants/socialIcons'

const NavbarIcons = () => {
   
    return (
        <IconWrapper>
            {
                socialIcons.map((social, index) => {
                    return (
                        <a className="icon" target="_blank" rel="noopener noreferrer" key={ index } href={ social.url }>{ social.icon }</a>
                    )
                })
            }
        </IconWrapper>
    )
    
}

const IconWrapper = styled.div`
    display: none;

    .icon {
        font-size: 1.3rem;
        ${styles.transDefault};

        &:nth-of-type(1) {
            color: #3b579d;
        }

        &:nth-of-type(2) {
            color: #3ab7f0;
        }

        &:nth-of-type(3) {
            color: #da5f53;
        }

        &:hover {
            color: ${styles.colors.mainYellow};
        }

    }

    @media (min-width: 768px) {
        display: flex;
        width: 10rem;
        justify-content: space-around;
    }

`

export default NavbarIcons
