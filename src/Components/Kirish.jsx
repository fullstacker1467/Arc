import React from 'react'
import { Link } from 'react-router-dom'

function Kirish() {
  return (
    <div className='kirish'>
        <div className="container">
            <div className="top">
                <h3>Прихожие <i class="fa-solid fa-person-walking-luggage"></i></h3>
            </div>
            <div className="bottom">
                    <div className="card">
                        <div className="tepa">
                            <img src="https://davitamebel.ru/upload/resize_cache/iblock/310/460_345_1/x310f39cb7c12ab9d47d983af9e0240ba.jpg,q1638957767.pagespeed.ic.RG7epX0P0t.jpg" />
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
                            <img src="https://www.mrdoors.ru/upload/resize_cache/webp/iblock/bac/440_340_1/prih_127_min.webp" />
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
                            <img src="https://mp75-shtukaturka.com.ua/wp-content/uploads/2018/12/diz-prihoz.png" />
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
                            <img src="https://www.garun.spb.ru/upload/iblock/94f/94f96b7765f0af42ea84e71a0738bd1c.jpg" />
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

export default Kirish