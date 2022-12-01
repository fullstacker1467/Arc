import React from 'react'
import { Link } from 'react-router-dom'

function Famous() {
  return (
    <div className='famous'>
      <div className="container">
        <div className="top">
          <h1>ПОПУЛЯРНЫЕ КАТЕГОРИИ</h1>
          <div className="bottom">
            <Link to='/'>КУХНИ</Link>
            <Link to='/'>КРОВАТИ</Link>
            <Link to='/'>ГОСТИННЫЕ</Link>
            <Link to='/'>ШКАФ-КУПЕ</Link>
            <Link to='/'>СПАЛЬНИ</Link>
            <Link to='/'>ПРИХОЖИЕ</Link>
            <Link to='/'>ДИВАНЫ</Link>
            <Link to='/'>ДЕТСКИЕ</Link>
            <Link to='/'>СТУЛЬЯ</Link>
            <Link to='/'>КАЧЕЛЬЯ</Link>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Famous