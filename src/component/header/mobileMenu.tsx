import React, { useState } from 'react';
import urlLogMgx from '../../static/assets/header/logo_margaux.png';
import Collapsible from 'react-collapsible';
import { ReactComponent as MenuSvg } from '../../static/assets/header/icon_menu.svg';
import { NavLink, useNavigate } from 'react-router-dom';

interface IMobileMenu {
    links: Array<{ text: string, to: string }>;
};

export const MobileMenu: React.FC<IMobileMenu> = ({ links }) => {

    return (
        <div className='header'>
            <div className='header-mobile h-100 d-flex justify-content-between align-items-center'>
                <img className='logo-mgx' src={urlLogMgx} alt='logo-mgx' />
            </div>
            <Collapsible trigger={<MenuSvg />}>
                <div className='nav-links d-flex flex-column align-items-center'>
                    {
                        links.map((link, index) => (
                            <NavLink key={link.text + index} className='nav-item pr-3' to={link.to}>{link.text}</NavLink>
                        ))
                    }
                </div>
            </Collapsible>
        </div>
    );
};