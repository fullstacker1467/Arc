import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const [active, setActive] = useState(true)

  let handelNav = () => {
    setActive(!active)
  }

  return (
    <nav className={`${!active? "active": null}`}>
      <div className="container">
        <div className="box">
          <h3>Виды мебелей</h3>
          <i onClick={handelNav} class="fa-solid fa-chevron-down"></i>
        </div>
        <Link to="kitchen">Кухни</Link>
        <Link to="guest">Гостинные</Link>
        <Link to="bad">Спальни</Link>
        <Link to="come">Прихожие</Link>
        <Link to="child">Детские</Link>
        <Link to="stol">Стол-стул</Link>
        <Link to="shkaf">Шкафы</Link>
      </div>
    </nav>
  )
}

export default Navbar