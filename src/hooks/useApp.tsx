import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/appContext';
import { MIN_SCREEN_MOBILE_WIDTH } from '../constants';

export const useApp = () => {

    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        const handleScreenWidth = () => {
            if (document.body.clientWidth < MIN_SCREEN_MOBILE_WIDTH) {
                dispatch({ type: 'HANDLE_IS_MOBILE', payload: true });
            } else {
                dispatch({ type: 'HANDLE_IS_MOBILE', payload: false });
            }
        }
        // check si mobile au premier rendering
        handleScreenWidth();

        // check si mobile au premier rendering
        window.addEventListener('resize', handleScreenWidth)
        return () => window.removeEventListener('resize', handleScreenWidth)
    }, []);

    const handleContentState = (contentState: 'carousel' | 'gallery') => {
        dispatch({ type: 'HANDLE_CONTENT_STATE', payload: contentState });
    };

    return {
        ...state,
        handleContentState
    };
};