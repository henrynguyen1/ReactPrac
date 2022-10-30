import React from 'react';
import RomanFlag from '../images/1920px-Nova_Roma_Flag.svg.png'
import {Link} from 'react-router-dom'


class Header extends React.Component{
    render(){
        return <div className='header'>
         <img src={RomanFlag} alt="logo"/>
         <Link className='NavBarItem' to='/founding'>Founding</Link>
         <Link className='NavBarItem' to='/kingdom'>Kingdom</Link>
         <Link className='NavBarItem' to='/republic'>Republic</Link>
         <Link className='NavBarItem' to='/imperial'>Imperial</Link>
         <Link className='NavBarItem' to='/byzantine'>Byzantine</Link>
        </div>
    }
}



export default Header