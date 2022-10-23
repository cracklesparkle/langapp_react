import {useState, useEffect, cloneElement} from 'react';

import './Carousel.css';

const PAGE_WIDTH = 450;

export const Carousel = ({children}) => {
    const [pages, setPages] = useState([])

    useEffect(() => {
        setPages(
            children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`
                    }
                })
            })
        )
    }, [])
    return (
        <div className="main-controller">
            <div className="window">
                <div className="all-pages-container">
                    {children}
                </div>
            </div>
        </div>
    )   
}