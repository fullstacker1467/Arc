import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/"><img src="/img/logo.png" className="logo" /></Link>
        <form>
          <input type="search" placeholder='Поиск' />
          <div className="icons">
              <i class="fa-solid fa-user"></i>
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </form>
      </div>

    </header>
  )
}

export default Header