import React from 'react'
import { Link } from 'react-router-dom'


function Mehmonxona() {
    return (
        <div className='guest'>
            <div className="container">
                <div className="top">
                    <h3>Гостинные <i class="fa-solid fa-couch"></i></h3>
                </div>
                <div className="bottom">
                    <div className="card">
                        <div className="tepa">
                            <img src="https://media.architecturaldigest.com/photos/587556902aa9cb7b7054c68d/master/w_2560,h_1924,c_limit/guest-rooms-0716-AD-GAMB12-01.JPG" />
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
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guest-bedroom-1-1576617523.jpg" />
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
                            <img src="https://media.architecturaldigest.com/photos/567b06fc7fd9a58978b7cc80/master/w_2239,h_1662,c_limit/guest-bedroom-04.jpg" />
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
                            <img src="https://www.coasterfurniture.com/wp-content/uploads/Avenue-4-piece-queen-bedroom-set-weathered-burnished-brown.jpg" />
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

export default Mehmonxona