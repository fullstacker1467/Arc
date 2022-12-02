import React from 'react'
import { Link } from 'react-router-dom'

function Oshxona() {
  return (
    <div className='kitchen'>
      <div className="container">
          <div className="top">
            <h3>Кухни <i class="fa-solid fa-kitchen-set"></i></h3>
          </div>
          <div className="bottom">
            <div className="card">
                <div className="tepa">
                  <img src="https://i.pinimg.com/originals/48/20/db/4820db67771e7ab9e47f9536e9dbd475.jpg" />
                </div>
                <div className="past">
                  <p>Гранд шкаф верхний горизонтальный глубокий стекло</p>
                  <h3><span>8586 руб</span>7586 руб</h3>
                  <div className="box">
                    <Link>Купить</Link>
                    <i class="fa-solid fa-heart-circle-plus"></i>
                  </div>
                </div>
            </div>
            <div className="card">
                <div className="tepa">
                  <img src="https://img.staticmb.com/mbcontent/images/uploads/2022/5/Modern%20and%20Luxury%20Kitchen%20Furniture%20Design.jpg" />
                </div>
                <div className="past">
                  <p>Гранд шкаф верхний горизонтальный глубокий стекло</p>
                  <h3><span>8586 руб</span>7586 руб</h3>
                  <div className="box">
                    <Link>Купить</Link>
                    <i class="fa-solid fa-heart-circle-plus"></i>
                  </div>
                </div>
            </div>
            <div className="card">
                <div className="tepa">
                  <img src="https://i.pinimg.com/736x/e4/e8/d4/e4e8d452081c69326287c538953544b9.jpg" />
                </div>
                <div className="past">
                  <p>Гранд шкаф верхний горизонтальный глубокий стекло</p>
                  <h3><span>8586 руб</span>7586 руб</h3>
                  <div className="box">
                    <Link>Купить</Link>
                    <i class="fa-solid fa-heart-circle-plus"></i>
                  </div>
                </div>
            </div>
            <div className="card">
                <div className="tepa">
                  <img src="https://media.architecturaldigest.com/photos/59b04ebe922511310f4e2cfd/16:9/w_2580,c_limit/1017-AD-GACH06-01_sq.jpg" />
                </div>
                <div className="past">
                  <p>Гранд шкаф верхний горизонтальный глубокий стекло</p>
                  <h3><span>8586 руб</span>7586 руб</h3>
                  <div className="box">
                    <Link>Купить</Link>
                    <i class="fa-solid fa-heart-circle-plus"></i>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Oshxona