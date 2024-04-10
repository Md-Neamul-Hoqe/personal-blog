"use client"
import { Typewriter } from 'react-simple-typewriter';

const TypeWrite = ({ textContents }) => {
    return (
        <Typewriter
            words={textContents}
            cursor
            cursorStyle='_'
            loop='true'
            typeSpeed={120}
            deleteSpeed={40}
            delaySpeed={1000}
        />
    );
};

export default TypeWrite;