import React from 'react'
import { Link } from 'react-router-dom'

function Kid() {
  return (
    <div className='kid'>
        <div className="container">
            <div className="top">
                <h3>Детские <i class="fa-solid fa-baby"></i></h3>
            </div>
            <div className="bottom">
                    <div className="card">
                        <div className="tepa">
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gee-house-6-1536335251.jpg" />
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
                            <img src="https://media.architecturaldigest.com/photos/572d14b7f04d500779921446/master/w_2468,h_1633,c_limit/kid-bedrooms-06.jpg" />
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
                            <img src="https://media.designcafe.com/wp-content/uploads/2020/05/17174742/childrens-bedroom-with-bunk-bed-and-seating-area.jpg" />
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
                            <img src="https://www.parents.com/thmb/Ut6InmYxyerRghFCS4TyPE8zCAc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_572412316-661b93f66ee0489abe91d42cb5c58659.jpg" />
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

export default Kid