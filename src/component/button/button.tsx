import React from 'react';
import '../../static/scss/buttons.scss';
interface IButton {
    text: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
    className?: string
};

export const Button: React.FC<IButton> = ({
    text,
    onClick,
    className
}) => {
    return (
        <button className={className} onClick={onClick} >{text}</button>
    );
};