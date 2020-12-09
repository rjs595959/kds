import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {HiMenuAlt1, HiOutlineSearch} from 'react-icons/hi';

const Header = () => {
    /* style area */
    const Wrap = styled.div`
        width: 100%;
        height: 30px;
        font-size: 20px;
        line-height: 30px;
        display: flex;
        position: fixed;
        justify-content: space-between;
    `
    const Logo = styled.div`
        padding-left: 10px;
    `
    const Gnb = styled.div`
        position: absolute;
        top: 30px;
        left: 0px;
        background: white;
        padding-left: 10px;
        width: ${window.innerWidth-10+"px"};
        height: ${window.innerHeight+"px"};
        z-index: 999;

        @media screen and (min-width: 768px) {
            display: block;
            & > ul {
                display: flex;
                & > li {
                    padding: 0px 10px;
                }
            }
        }        
    `
    const Icons = styled.div`
        z-index: 1000;
        padding-right: 10px;
    `
    
    /* State area */
    const [showWrap, setShowWrap] = useState(true);
    const [showGnb, setShowGnb] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    /* Hooks ares */
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    /* function area */
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        console.log(position);
    };

    return (
        <Wrap style={showWrap ? {} : {"display" : "none"}}>
            <Logo>KB데이타시스템</Logo>
            <Gnb style={showGnb ? {"display" : "block"} : {"display" : "none"}}>
                <ul>
                    <li>
                        About
                    </li>
                    <li>
                        Vision
                    </li>
                    <li>
                        Story
                    </li>
                    <li>
                        Recruit
                    </li>
                </ul>
            </Gnb>
            <Icons>
                <HiOutlineSearch />
                <HiMenuAlt1 onClick={() => {setShowGnb(!showGnb)}}/>
            </Icons>
            
        </Wrap>
    )
}

export default Header;