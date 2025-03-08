import React, {useEffect, useRef} from 'react';
import Typed from 'typed.js';
import './typewriter.css';

const Typewriter = ({textList}) => {
    const typedElement = useRef(null);
    const typedInstance = useRef(null);

    useEffect(() => {
        typedInstance.current = new Typed(typedElement.current, {
            strings: textList,
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
            cursorChar: "❚",
        });

        return () => {
            typedInstance.current.destroy();
        };
    }, []);

  return (
    <div className='typed__text-container'>
        <span ref={typedElement} className="typed__text"></span>
    </div>
  );
};

export default Typewriter;