import React, { useContext, useState } from 'react';
import { CarouselContext } from '../context/carouselContext';

export const useCarousel = () => {
    const { state, dispatch } = useContext(CarouselContext);

    const [touchStart, setTouchStart] = useState<React.Touch>();
    const [touchEnd, setTouchEnd] = useState<React.Touch>();

    const handleChangeSlide = (action: "+" | "-") => {
        if (action === '-') {
            dispatch({ type: 'SET_CURRENT_SLIDE', payload: state.currentSlide - 1 });
        }
        if (action === '+') {
            dispatch({ type: 'SET_CURRENT_SLIDE', payload: state.currentSlide + 1 });
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0]);
    }

    function handleTouchMove(e: React.TouchEvent) {
        setTouchEnd(e.targetTouches[0]);
    }

    function handleTouchEnd() {
        if (touchStart?.clientX && touchEnd?.clientX && touchStart?.clientX - touchEnd?.clientX > 150) {
            handleChangeSlide('+');
        }

        if (touchStart?.clientX && touchEnd?.clientX && touchStart.clientX - touchEnd.clientX < -150) {
            handleChangeSlide('-');
        }
    }

    return {
        ...state,
        handleChangeSlide,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd
    };
};