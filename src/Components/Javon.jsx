import React from 'react'
import { Link } from 'react-router-dom'

function Javon() {
  return (
    <div className='javon'>
        <div className="container">
            <div className="top">
                <h3>Шкафы <i class="fa-solid fa-shirt"></i></h3>
            </div>
            <div className="bottom">
                    <div className="card">
                        <div className="tepa">
                            <img src="https://www.mydomaine.com/thmb/LXtPxEi3GmRdwAWmw66I90d8o_M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/montgomery..-8a27ac05cf004c54a1f27a62256fee9d.png" />
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
                            <img src="http://cdn.shopify.com/s/files/1/0020/4020/1328/articles/Wall_Shelf_Designs.jpg?v=1644838667" />
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
                            <img src="https://www.kathykuohome.com/blog/wp-content/uploads/2016/06/Bookshelf_Cover-1-1140x760.jpg" />
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
                            <img src="https://www.kuhni-nsk.ru/files/stati/kuhni_9m2_2022_nsk_09-1.jpg" />
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

export default Javon