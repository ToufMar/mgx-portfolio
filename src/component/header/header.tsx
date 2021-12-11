import React, { useEffect, useState } from 'react';
import '../../static/scss/header.scss';
import urlLogMgx from '../../static/assets/header/logo_margaux.png';
import { Button } from '../button/button';
import { NavLink, useNavigate } from 'react-router-dom';
import { MobileMenu } from './mobileMenu';
import { useApp } from '../../hooks/useApp';

export const Header = () => {

    const navigate = useNavigate();
    const appContext = useApp();

    const links = [
        {
            text: 'Contact',
            to: '/contact'
        },
        {
            text: 'CV',
            to: '/cv'
        },
    ];

    if (appContext.isMobile) {
        return <MobileMenu links={links} />
    } else {
        return (
            <div className='header d-flex justify-content-between align-items-center'>
                <div className='h-100 d-flex align-items-end'>
                    <img className='logo-mgx' src={urlLogMgx} alt='logo-mgx' onClick={() => navigate('/')} />
                    <div className='nav-links'>
                        {
                            links.map((link, index) => (
                                <NavLink key={link.text + index} className='nav-item pr-3' to={link.to}>{link.text}</NavLink>
                            ))
                        }
                    </div>
                </div>
                <Button text='Voir plus' onClick={() => appContext.handleContentState(appContext.contentState === 'carousel' ? 'gallery' : 'carousel')} className='btn-view-more' />
            </div>
        );
    }
};