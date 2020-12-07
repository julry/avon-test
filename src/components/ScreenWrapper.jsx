import React, {useEffect, useLayoutEffect, useState} from 'react';
import styled from 'styled-components';
import {background} from "../constants/images";
import {questions} from "../questions.config";
import {screens} from "../screens.config";
import {preloadImage} from "../utils/preloadImage";
import { ProgressProvider } from '../contexts/ProgressContext';

const Wrapper = styled.div`
    background: url(${background}) no-repeat;
    background-size: cover;
    height: ${props => props.height}px;
    background-position-x: 55%;
    color: #fff;
    position: relative;
`

const DEFAULT_ANSWERS = questions.reduce((res, question) => ({ ...res, [question.id]: null }), {});

function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
        function updateSize() {
            setSize( window.innerHeight);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const ScreenWrapper = () => {
    /////////////////// for development ////////////////////////////////////
    const urlParams = new URLSearchParams(window.location.search);
    const screenParam = urlParams.get('screen');
    ////////////////////////////////////////////////////////////////////////

    const [currentScreenIndex, setCurrentScreenIndex] = useState(+screenParam || 0);
    const [answers, setAnswers] = useState(DEFAULT_ANSWERS);
    const currentHeight = useWindowSize();

    const setPrev = () => {
        const canSet = currentScreenIndex > 0;
        if (canSet) {
            setCurrentScreenIndex(currentScreenIndex - 1);
        }
    };

    const setNext = () => {
        const canSet = currentScreenIndex < screens.length - 1;
        if (canSet) {
            setCurrentScreenIndex(currentScreenIndex + 1);
        }
    };

    const setAnswer = (questionId, answerId) => {
        setAnswers(answers => ({ ...answers, [questionId]: answerId }));
    };

    const { component, preloadImages, ...screen } = screens[currentScreenIndex] || {};
    const Component = component || (() => null);

    useEffect(() => {
        const clears = preloadImages && preloadImages.map(img => preloadImage(img));
        return () => clears && clears.forEach(clear => clear());
    }, [preloadImages]);

    const progressProviderValue = {
        screen,
        answers,
        setAnswer,
        setNext,
        setPrev,
    };

    return (
        <Wrapper height={currentHeight}>
            <ProgressProvider value={progressProviderValue}>
                <Component />
            </ProgressProvider>
        </Wrapper>
    );
}

export default ScreenWrapper;