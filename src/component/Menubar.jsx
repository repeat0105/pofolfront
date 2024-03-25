
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../scss/menubar.scss';

function Menubar(props) {
    
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const handleButtonClick = () => {
    
        setIsSidebarActive(!isSidebarActive);
    };

    
    const handlePageClick = () => {
    
        setIsSidebarActive(false);
    };

    
    const handleKeyDown = (event) => {
        
        if (event.keyCode === 27 && isSidebarActive) {
        
            setIsSidebarActive(false);
        }
    };

    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isSidebarActive]); 

    return (
        <header>
            <div id="page-wrapper" onClick={handlePageClick}>
                <div id="title"><Link to="/">KKY PortFolio</Link></div>
            </div>

            <div id="btn" className={isSidebarActive ? 'active' : ''} onClick={handleButtonClick}>
                <div id='top'></div>
                <div id='middle'></div>
                <div id='bottom'></div>
            </div>
            <div id="box" className={isSidebarActive ? 'active' : ''}>
                <div id="items">
                    <div className="item"><Link to="/" state={"0"}>HOME</Link></div>
                    <div className="item"><Link to="/skill" state={"0"}>SKILL</Link></div>
                    <div className="item"><Link to="/work" state={"0"}>WORK</Link></div>
                </div>
            </div>
        </header>
    );
}

export default Menubar;
