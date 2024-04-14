import React, { useState, useEffect  } from "react";
import './header.css';

import LogoHorizontal from "../../images/logo-horizontal.png"

export default function Header (){

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY;

            setIsScrolled(false);

            if(scrollTop > 50) {
                setIsScrolled(true);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })
    return (
        <header  className={isScrolled ? 'scrolled' : ''}>
            <img src={LogoHorizontal} width={230} alt="Logo Horizontal" />
        </header>
    )
}