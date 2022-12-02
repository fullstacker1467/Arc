import React from 'react'
import { Link } from 'react-router-dom'

function Topsales() {
  return (
    <div className='topsale'>
        <div className="container">
            <div className="top">
                <h1>ТОВАРЫ ПО АКЦИИ  <img src="/img/isale.gif" alt="" /></h1>
            </div>
            <div className="bottom">
                <div className="card">
                    <div className="top1">
                        <img src="/img/divan.png" />
                    </div>
                    <div className="bottom1">
                        <p>Гранд шкаф верхний горизонтальный глубокий стекло 500</p>
                        <h3><span>7159 руб  </span>   5017 руб</h3>
                        <div className='box'>
                        <Link>КУПИТЬ</Link>
                        <i class="fa-solid fa-heart-circle-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="top1">
                        <img src="/img/divan1.jpg" />
                    </div>
                    <div className="bottom1">
                        <p>Гранд шкаф верхний горизонтальный глубокий стекло 500</p>
                        <h3><span>8659 руб  </span>   8067 руб</h3>
                        <div className='box'>
                        <Link>КУПИТЬ</Link>
                        <i class="fa-solid fa-heart-circle-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="top1">
                        <img src="/img/divan2.jpeg" />
                    </div>
                    <div className="bottom1">
                        <p>Гранд шкаф верхний горизонтальный глубокий стекло 500</p>
                        <h3><span>5159 руб  </span>   4597 руб</h3>
                        <div className='box'>
                        <Link>КУПИТЬ</Link>
                        <i class="fa-solid fa-heart-circle-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="top1">
                        <img src="/img/diva3.webp" />
                    </div>
                    <div className="bottom1">
                        <p>Гранд шкаф верхний горизонтальный глубокий стекло 500</p>
                        <h3><span>18159 руб  </span>   13017 руб</h3>
                        <div className='box'>
                        <Link>КУПИТЬ</Link>
                        <i class="fa-solid fa-heart-circle-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topsales