import React from 'react'

function Header() {
  return (
    <header>
      <div className="container">
        <img src="/img/logo.png" className="logo" />
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