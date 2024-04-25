import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {

  const navigate = useNavigate()
  const [active, setActive] = useState('home')

  console.log(active);

  return (
    <div className="container-fluid bg-light position-relative shadow">
      <nav
        className="navbar navbar-expand-lg bg-light navbar-light pt-3 pt-lg-3 pb-lg-3 py-3 py-lg-0 px-0 px-lg-5"
      >
        <img className="logo" src={Logo} onClick={() => navigate('/')} style={{cursor: 'pointer'}} alt=""/>  
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-end"
          id="navbarCollapse"
        >
          <div className="navbar-nav font-weight-bold mx-auto py-0">
            <Link to='/' onClick={() => setActive('home')} className={active == 'home' ? 'nav-item nav-link active' : 'nav-item nav-link'} >Главная</Link>
            <Link to="/career" onClick={() => setActive('career')} className={active == 'career' ? 'nav-item nav-link active' : 'nav-item nav-link'} >Профориентация</Link>
            <Link to="/flex" onClick={() => setActive('flex')} className={active == 'flex' ? 'nav-item nav-link active' : 'nav-item nav-link'} >Flex</Link>
            <Link to="/self-d" onClick={() => setActive('self-d')} className={active == 'self-d' ? 'nav-item nav-link active' : 'nav-item nav-link'} >Саморазвитие</Link>
            <Link to="/tests" onClick={() => setActive('tests')} className={active == 'tests' ? 'nav-item nav-link active' : 'nav-item nav-link'} >Тесты</Link>
          </div>
{/* 
          <div className="navbar-nav font-weight-bold mx-auto py-0">
            <Link to='/' className='nav-item nav-link' className={active == 'home' ? 'active' : ''} onClick={() => setActive('home')}>Главная</Link>
            <Link to="/career" className="nav-item nav-link" className={active == 'career' ? 'active' : ''} onClick={() => setActive('career')}>Профориентация</Link>
            <Link to="/flex" className="nav-item nav-link" className={active == 'flex' ? 'active' : ''} onClick={() => setActive('flex')}>Flex</Link>
            <Link to="/self-d" className="nav-item nav-link" className={active == 'self-d' ? 'active' : ''} onClick={() => setActive('self-d')}>Саморазвитие</Link>
            <Link to="/tests" className="nav-item nav-link" className={active == 'tests' ? 'active' : ''} onClick={() => setActive('tests')}>Тесты</Link>
          </div> */}
        </div>
      </nav>
    </div>
  )
}