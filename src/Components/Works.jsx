import React from 'react'

function Works() {
    return (
        <div className='works'>
            <div className="container">
                <div className="top">
                    <h2>НАШИ РАБОТЫ</h2>
                </div>
                <div className="bottom">
                    <div className="two">
                        <div className="first">
                            <h3>КУХНЯ ГЛЕТЧЕР</h3>
                            <img src="/img/gletcher.png" />
                        </div>
                        <div className="second">
                            <h3>ГОСТИННАЯ ДЕНВЕР</h3>
                            <img src="/img/denver.png" />
                        </div>
                    </div>
                    <div className="three">
                        <div className="first">
                            <h3>КАМОДЫ КУПЫ</h3>
                            <img src="/img/kamod.jpg" />
                        </div>
                        <div className="second">
                            <h3>ШКАФ МАО</h3>
                            <img src="/img/shelf.jpg" />
                        </div>
                        <div className="third">
                            <h3>ТУМБА ТАЛС</h3>
                            <img src="/img/tumba.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works