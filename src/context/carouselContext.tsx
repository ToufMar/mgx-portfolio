import React, { createContext, useReducer } from 'react';

const initialState = {
    currentSlide: 0,
    handleChangeSlide: (action: '+' | '-') => null,
    handleTouchStart: (e: React.TouchEvent) => null,
    handleTouchMove: (e: React.TouchEvent) => null,
    handleTouchEnd: () => null,
};

interface ICarouselState {
    currentSlide: number
    handleChangeSlide: Function
    handleTouchStart: Function
    handleTouchMove: Function
    handleTouchEnd: Function
};

const CarouselContext = createContext<{
    state: ICarouselState
    dispatch: React.Dispatch<any>
}>({ state: initialState, dispatch: () => null });

const reducer = (state: ICarouselState, action: { type: string, payload: any }): ICarouselState => {

    const { type, payload } = action;

    switch (type) {
        case 'SET_CURRENT_SLIDE': {
            return {
                ...state,
                currentSlide: payload
            };
        }
        default: {
            return state;
        }
    }
};

const CarouselProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CarouselContext.Provider value={{ state, dispatch }} >{children}</CarouselContext.Provider>
    );
};

export { CarouselProvider, CarouselContext };