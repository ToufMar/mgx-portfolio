import React, { useContext, useState, useEffect, TouchEventHandler } from 'react';
import '../../static/scss/my-carousel.scss';
import { useCarousel } from '../../hooks/useCarousel';
import { useApp } from '../../hooks/useApp';

interface ISlide {
    index: number
    currentSlide: number
    contentState: string
};

const Slide: React.FC<ISlide> = ({ index, currentSlide, contentState }) => {

    const getClass = () => {
        if (contentState === 'carousel') {
            if (index === currentSlide) {
                return 'item current';
            }
            if (index === currentSlide - 1) {
                return 'item visible-prev';
            }
            if (index === currentSlide + 1) {
                return 'item visible-next';
            }
            if (index > currentSlide + 1) {
                return 'item invisible-next';
            }
            if (index < currentSlide - 1) {
                return 'item invisible-prev';
            }
        }
        if (contentState === 'gallery') {
            return 'item item-gallery'
        }
    }
    return (
        <div key={index} className={getClass()}><h1>{index}</h1></div>
    );
};

export const MyCarousel = () => {

    const carouselState = useCarousel();
    const appState = useApp();

    
    const getCarouselClass = () => {
        if (appState.isMobile) {
            return 'carousel gallery';
        } else {
            return `carousel ${appState.contentState === 'gallery' ? 'gallery' : ''}`;
        }
    };
    console.log(appState.isMobile)
    const getSliderClass = () => {
        if (appState.isMobile) {
            return 'slider slider-gallery';
        } else {
            return `slider ${appState.contentState === 'gallery' ? 'slider-gallery' : 'carousel'}`;
        }
    };

    const getContentState = () => {
        if (appState.isMobile) {
            return 'gallery';
        } else {
            return appState.contentState;
        }
    }

    const slides = [0, 1, 2, 3, 4, 5, 6, 7].map(d => <Slide key={d} index={d} currentSlide={carouselState.currentSlide} contentState={getContentState()} />);
    return (
        <>
            <div
                onTouchEnd={carouselState.handleTouchEnd}
                onTouchStart={carouselState.handleTouchStart}
                onTouchMove={carouselState.handleTouchMove}
                className={getCarouselClass()}
            >
                <div className={getSliderClass()}>
                    {slides}
                </div>
                <button onClick={(e) => carouselState.handleChangeSlide("-")}>BACK</button>
                <button onClick={(e) => carouselState.handleChangeSlide("+")}>NEXT</button>
            </div>
        </>
    );
}
