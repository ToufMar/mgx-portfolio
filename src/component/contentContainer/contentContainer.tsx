import React from 'react';
import '../../static/scss/content-container.scss';

export const ContentContainer: React.FC = ({ children }) => {
    
    return (
        <div className='content-container d-flex align-items-center'>{children}</div>
    );
};