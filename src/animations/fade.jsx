import { Transition } from 'react-transition-group'
import React, { useState, useRef, useEffect } from 'react'

const transform = "translateY(50%)"

const transitionStyles = {
  entering: { transform: "translateY(0%)", opacity: 1 },
  entered: { transform: "translateY(0%)", opacity: 1 },
  exiting: { transform: `${transform}`, opacity: 0 },
  exited: { transform: `${transform}`, opacity: 0 },
};

function Fade(props) {
    const duration = parseInt(props.duration) || 1000
    const delay = parseInt(props.delay) || 0

    const defaultStyle = {
        transition: `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
        transform: `${transform}`,
        opacity: 0,
      };

    const [inProp, setInProp] = useState(false)
    const nodeRef = useRef(null)
    useEffect(() => {
        const timer = setTimeout(() => {
            setInProp(true)
        }, delay)
        return () => clearTimeout(timer)
    }, [])

    return (
        <Transition in={inProp} timeout={duration} nodeRef={nodeRef}>
            {(state) => (
                <div
                style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                }}
                ref={nodeRef}
                >
                {props.children}
                </div>
            )}
        </Transition>
    )
}

export default Fade