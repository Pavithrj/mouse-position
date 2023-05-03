import React, { useState, useEffect } from 'react';
import './mouse-event.css';

function MousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(event) {
            setMousePosition({ x: event.clientX, y: event.clientY });
        }
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div data-testid="mouseposition" className='display'>
            <div>
                Mouse position x:
                <div className='position'>
                    {mousePosition.x}
                </div>
            </div>
            <div>
                Mouse position y:
                <div className='position'>
                    {mousePosition.y}
                </div>
            </div>
        </div>
    );
}

export default MousePosition;